## Prompt 1: The Hiring Review

Advance. You demonstrate a focused backend skill set (Java, Spring Boot, PostgreSQL, Redis) and tackle real-world distributed systems problems like concurrency and schema isolation. Your experience progression at Novoinvent Software establishes a stable professional baseline for a mid-level role.

**2. THE 90-SECOND READ**
I concluded you are a pure backend engineer who is currently expanding into modern DevOps (Docker, AWS). The headline "Java Backend Engineer | Spring Boot, REST APIs, Postgres, AWS | Scalable Systems" communicates exactly what you do immediately, without fluff.

**3. BIGGEST BLOCKER**
Lack of production-scale metrics. You claim "high-concurrency ticket booking", but there is no context on user load, requests per second (RPS), or data volume. Without scale, concurrency is just theory.

**4. CREDIBILITY**
"25% Faster Deployments" and "boosting performance by 15%". These percentages sound templated. What exactly was boosted by 15%? CPU utilization, query latency, or rendering time? If I opened your GitHub for the "Multi-tenant SaaS App", I would look for the specific multi-tenancy implementation. If it is just a `tenant_id` column added to a table, the claim of "schema isolation" will fall apart.

**5. DEPTH**
The strongest claim is "Real-world backend design patterns for managing concurrent bookings and preventing overselling". I believe this because you explicitly paired it with Redis and PostgreSQL, suggesting you understand the need for distributed locks or caching to handle transactional race conditions (like double-booking). This shows architectural judgement, not just vocabulary.

**6. GAPS**
For 2-4 YOE, I expect to see observability and testing. There is no mention of unit/integration testing (JUnit, Mockito, Testcontainers) or monitoring tools (Prometheus, Grafana, ELK stack). Mid-level engineers must prove they can support what they build in production.

**7. SCORE**
7/10. A 10 for a mid-level backend candidate is a portfolio that clearly articulates the business problem, details the architecture, explains the trade-offs chosen (e.g., "chose Redis over DB locking because of X"), and lists production metrics. You are a 7 because the technical stack is right and the project choices are strong, but the depth of implementation details and operational metrics are missing.

**8. TOP 3 FIXES**

1. **Clarify the metrics:** Change "boosting performance by 15%" to what actually improved (e.g., "Reduced database query latency by 15% using Redis caching"). *Why:* It proves you measure your impact. *Time:* 10 minutes.
2. **Add a Testing & Observability section:** Mention the testing frameworks you use daily. *Why:* Mid-level engineers are expected to write tests. *Time:* 5 minutes.
3. **Explain the "Schema Isolation":** Add one sentence to the Multi-tenant app detailing *how* it's isolated (e.g., Hibernate multitenancy with database-per-tenant). *Why:* It grounds a buzzword in technical reality. *Time:* 5 minutes.

If I were comparing you against five candidates with nearly identical CVs, I would remember the "Ticketing System" with "safe inventory handling". Most junior/mid portfolios are CRUD blogs or to-do lists; tackling concurrency and overselling shows you are thinking about distributed systems problems.

---

## Prompt 2: Can an AI actually read it?

1. **Who is this person and what do they do?** Ashish Kumar Jha, a Software Engineer at Novoinvent Software (hybrid) based in India, building scalable web applications.
2. **What are they strongest at, specifically?** Backend development using Java and Spring Boot, alongside relational databases (PostgreSQL/MySQL).
3. **What have they built?**
* Multi-tenant SaaS App | Java 21, Spring Boot 4.0.6, Spring Security, JWT, PostgreSQL, Docker
* Ticketing System | Java, Spring Boot, Redis, PostgreSQL, Angular, Maven
* Multi-threaded-task-scheduler | Java
* spring-commerce | Java
* naruto-card-clash | Python


4. **How much experience do they have, and where?** ~3.5 years total at Novoinvent Software (Software Intern from March 2023 - May 2024; Software Engineer from June 2024 - Present).
5. **How would I contact them, and are they open to work?** Via GitHub (Ashjha75), X (@ashish5jha), or LinkedIn (in/ashish5jha). They are open to work, stating: "If you're looking for someone dedicated... let's connect".
6. **Frontend, backend or full-stack?** Backend engineer. While Angular/Node.js are mentioned in past roles, the headline explicitly declares "Java Backend Engineer", and the strongest featured projects tackle backend infrastructure.

**Separately:**

* **What could you NOT determine:** Your exact email address or phone number in plain text.
* **What was inferred:** I had to infer your total years of professional experience by doing the math on your tenure dates at Novoinvent.
* **Machine-readable files:** The files you listed (`/llms.txt`, `/profile.json`) make parsing highly accurate for bots, ensuring zero hallucination on your core tech stack and project links.

---

## Prompt 3: The Interview Stress Test

1. **Write the 8 questions:**
* "You built a multi-tenant app with schema isolation. Walk me through how you configure Hibernate/Spring Data JPA to route queries to the correct schema per request."
* "In your Ticketing System, how exactly do you prevent overselling when 500 users click 'buy' on the last 10 tickets at the exact same millisecond?"
* "You mention Redis for caching in the ticket system. Are you using it just as a read-through cache, or are you doing transactional decrements in Redis before persisting to PostgreSQL?"
* "What happens if the Redis node goes down during a high-concurrency ticket flash sale?"
* "For your JWT authentication, how do you handle token revocation or logout, given that JWTs are stateless?"
* "You claim '25% Faster Deployments'. How did you measure this baseline, and what specific bottleneck did you remove to achieve it?"
* "Explain the 'dynamic tenant provisioning' — what executes the DDL to create the new schema when a new tenant signs up?"
* "You mentioned 'safe inventory handling'. Are you using optimistic locking (e.g., `@Version`) or pessimistic locking at the database level, and why?"


2. **Weak vs Strong answers:**
* **Q1 (Schema):** *Weak:* "I used a library." *Strong:* Explains `CurrentTenantIdentifierResolver` and connection provider routing in Hibernate.
* **Q2 (Overselling):** *Weak:* "I check if count > 0 then save." *Strong:* Discusses race conditions, row-level locks (`SELECT FOR UPDATE`), or Redis atomic operations.
* **Q3 (Redis):** *Weak:* "I save the ticket there so it's fast." *Strong:* Explains using Redis `DECR` and checking if `< 0` to fail fast before hitting the DB.
* **Q4 (Failover):** *Weak:* "The system crashes." *Strong:* Discusses fallback to DB, rate-limiting, or Redis Sentinel/Cluster configurations.
* **Q5 (JWT):** *Weak:* "I just delete it on the frontend." *Strong:* Mentions a server-side blacklist in Redis with a TTL matching the token's expiry.
* **Q6 (Deployments):** *Weak:* "I used Jenkins." *Strong:* Identifies a specific slow pipeline stage (e.g., test execution or Docker build caching) that was optimized.
* **Q7 (Dynamic Tenant):** *Weak:* "The admin does it." *Strong:* Explains running Flyway/Liquibase migrations programmatically upon tenant registration.
* **Q8 (Locking):** *Weak:* "I use transactions." *Strong:* Compares optimistic (good for low contention) vs pessimistic (good for high contention like a flash sale) and justifies the choice.


3. **Predict struggle:** The "25% Faster Deployments" or "15% performance boost" claims. Often, junior/mid engineers put these numbers on their resume because they sound impressive, but struggle to explain the exact mathematical baseline and architectural change that led to the precise percentage under pressure.
4. **Couldn't explain in depth:** "Enterprise-grade backend architecture". This is a massive, vague buzzword. If pressed to define what specifically makes your JWT implementation "enterprise-grade" compared to a standard tutorial, I suspect the answer might just be "it works."
