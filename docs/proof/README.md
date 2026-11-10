# Proof artifacts

Real output from real runs. Nothing here is written by hand or estimated.

## BookingConcurrencyTest — ticketing-system

**Status: passing.** Run on 2026-11-10 against PostgreSQL 16.15 in a Testcontainers
container, on Java 25 / Spring Boot 4.0.5.

```
  buyers=200  tickets=10  ->  sold=10  rejected=190  remaining=0

Tests run: 1, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 24.80 s
```

This is the test both AI reviews and the adversarial verifier said was the single
biggest gap: the portfolio's whole thesis is "systems that hold up under load",
and there was not one concurrency test in any of the five repos.

### What it proves

200 threads block on a `CountDownLatch` and are released at once against an event
with 10 tickets. Exactly 10 reservations succeed, 190 are rejected, and
`availableTickets` lands on 0 — never negative.

It runs against **real PostgreSQL, not H2**, deliberately: the guarantee is a
database one. `EventRepository.findById` is overridden with
`@Lock(LockModeType.PESSIMISTIC_WRITE)`, so it only holds if the database
actually issues the lock. Confirmed in the emitted SQL:

```sql
select e1_0.id, e1_0.available_tickets, ... from events e1_0
where e1_0.id = ? for no key update of e1_0
```

The class runs with `@Transactional(propagation = NOT_SUPPORTED)` because
`@DataJpaTest` otherwise wraps the whole test in one rolled-back transaction —
which would defeat the point. Each worker thread needs its own real transaction
to contend for the row lock.

### A real bug it surfaced

The first run failed with:

```
ERROR: cannot execute SELECT FOR NO KEY UPDATE in a read-only transaction
```

`EventRepository.findById` is overridden with `PESSIMISTIC_WRITE`, but Spring
Data's `SimpleJpaRepository.findById` is `@Transactional(readOnly = true)`. So
**any caller that reads an Event outside a writable transaction now fails.** The
booking path is fine, because `InventoryService.reserveTickets` is `@Transactional`
and its read-write transaction wins. Every other read path is not.

Worth fixing in the repo: scope the lock to a dedicated
`findByIdForUpdate(Long id)` instead of overriding `findById` globally, so plain
reads stay plain reads. This is also a strong interview answer if asked why the
lock is where it is.

### To run it yourself

Copy `BookingConcurrencyTest.java` to
`src/test/java/com/ashish/ticketing/modules/inventory/` in the ticketing repo,
add the Testcontainers BOM and three test dependencies to `pom.xml`:

```xml
<dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>org.testcontainers</groupId>
      <artifactId>testcontainers-bom</artifactId>
      <version>1.21.4</version>
      <type>pom</type>
      <scope>import</scope>
    </dependency>
  </dependencies>
</dependencyManagement>
```
plus `spring-boot-testcontainers`, `org.testcontainers:junit-jupiter` and
`org.testcontainers:postgresql`, all `<scope>test</scope>`. Then:

```bash
./mvnw -Dtest=BookingConcurrencyTest test    # Docker must be running
```

Note: Testcontainers **2.x dropped the per-database modules**, so `postgresql`
and `junit-jupiter` only exist on the 1.x line. Pin 1.21.4, not 2.0.5.

Spring Boot 4 also moved the test annotations:
`org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest` and
`org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase`.

### Still to do

- A CAS-contention test for `Multi-threaded-task-scheduler` (no `src/test`
  directory exists there at all).
- Terminal capture of the scheduler CLI running with a retry firing.
