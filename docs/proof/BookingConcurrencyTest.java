package com.ashish.ticketing.modules.inventory;

import static org.assertj.core.api.Assertions.assertThat;

import com.ashish.ticketing.modules.event.entity.Event;
import com.ashish.ticketing.modules.event.enums.EventCategory;
import com.ashish.ticketing.modules.event.enums.EventStatus;
import com.ashish.ticketing.modules.event.repository.EventRepository;
import com.ashish.ticketing.modules.inventory.service.InventoryLockService;
import com.ashish.ticketing.modules.inventory.service.InventoryPolicyService;
import com.ashish.ticketing.modules.inventory.service.InventoryService;
import java.math.BigDecimal;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

/**
 * Proves the property the README claims: inventory cannot be oversold under
 * concurrent demand.
 *
 * <p>This runs against a real PostgreSQL instance, not H2, because the guarantee
 * being tested is a database-level one — {@code EventRepository.findById} is
 * overridden with {@code @Lock(PESSIMISTIC_WRITE)}, so the behaviour only exists
 * if the database actually issues {@code SELECT ... FOR UPDATE}.
 *
 * <p>The test class itself runs outside a transaction ({@code NOT_SUPPORTED}).
 * {@code @DataJpaTest} would otherwise wrap everything in one rolled-back
 * transaction, which would defeat the point: each worker thread needs its own
 * real transaction to contend for the row lock.
 */
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Import({InventoryService.class, InventoryLockService.class, InventoryPolicyService.class})
@Transactional(propagation = Propagation.NOT_SUPPORTED)
@Testcontainers
class BookingConcurrencyTest {

    private static final int TICKETS_ON_SALE = 10;
    private static final int CONCURRENT_BUYERS = 200;

    @Container
    static final PostgreSQLContainer<?> POSTGRES =
            new PostgreSQLContainer<>("postgres:16-alpine");

    @DynamicPropertySource
    static void datasource(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", POSTGRES::getJdbcUrl);
        registry.add("spring.datasource.username", POSTGRES::getUsername);
        registry.add("spring.datasource.password", POSTGRES::getPassword);
        // the app ships no application.properties, so the schema has to come
        // from somewhere for the test to have tables at all
        registry.add("spring.jpa.hibernate.ddl-auto", () -> "create-drop");
    }

    @Autowired EventRepository eventRepository;
    @Autowired InventoryService inventoryService;
    @Autowired TransactionTemplate transactionTemplate;

    @Test
    @DisplayName("200 buyers race for 10 tickets: exactly 10 succeed, never oversold")
    void doesNotOversellUnderContention() throws Exception {
        Long eventId = transactionTemplate.execute(status -> eventRepository.save(publishedEvent()).getId());

        ExecutorService pool = Executors.newFixedThreadPool(32);
        CountDownLatch startGun = new CountDownLatch(1);
        CountDownLatch finished = new CountDownLatch(CONCURRENT_BUYERS);
        AtomicInteger sold = new AtomicInteger();
        AtomicInteger rejected = new AtomicInteger();

        for (int i = 0; i < CONCURRENT_BUYERS; i++) {
            pool.submit(() -> {
                try {
                    // every thread blocks here, so they all hit the row at once
                    startGun.await();
                    inventoryService.reserveTickets(eventId, 1);
                    sold.incrementAndGet();
                } catch (Exception e) {
                    rejected.incrementAndGet();
                } finally {
                    finished.countDown();
                }
            });
        }

        startGun.countDown();
        boolean completed = finished.await(90, TimeUnit.SECONDS);
        pool.shutdownNow();

        // findById carries @Lock(PESSIMISTIC_WRITE), and Spring Data's default
        // findById transaction is readOnly=true — Postgres refuses SELECT ... FOR
        // NO KEY UPDATE there. So the verification read needs a writable one.
        int remaining = transactionTemplate.execute(
                status -> eventRepository.findById(eventId).orElseThrow().getAvailableTickets());

        System.out.printf(
                "%n  buyers=%d  tickets=%d  ->  sold=%d  rejected=%d  remaining=%d%n",
                CONCURRENT_BUYERS, TICKETS_ON_SALE, sold.get(), rejected.get(), remaining);

        assertThat(completed).as("all buyer threads finished").isTrue();
        assertThat(sold.get()).as("exactly the tickets on sale were sold").isEqualTo(TICKETS_ON_SALE);
        assertThat(rejected.get()).isEqualTo(CONCURRENT_BUYERS - TICKETS_ON_SALE);
        assertThat(remaining).as("inventory never goes negative").isZero();
    }

    private Event publishedEvent() {
        Instant now = Instant.now();
        Event event = new Event();
        event.setTitle("Flash sale");
        event.setDescription("Contention test fixture");
        event.setCategory(EventCategory.values()[0]);
        event.setStatus(EventStatus.PUBLISHED);
        event.setCity("Delhi");
        event.setVenue("Test Arena");
        event.setStartTime(now.plus(7, ChronoUnit.DAYS));
        event.setEndTime(now.plus(8, ChronoUnit.DAYS));
        event.setBookingStartTime(now.minus(1, ChronoUnit.HOURS));
        event.setBookingEndTime(now.plus(1, ChronoUnit.HOURS));
        event.setTicketPrice(new BigDecimal("499.00"));
        event.setTotalTickets(TICKETS_ON_SALE);
        event.setAvailableTickets(TICKETS_ON_SALE);
        return event;
    }
}
