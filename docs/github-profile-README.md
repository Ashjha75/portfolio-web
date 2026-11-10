<h3 align="center">Ashish Kumar Jha</h3>
<p align="center">
  Backend engineer — Java · Spring Boot · PostgreSQL · AWS<br/>
  <sub>Software Engineer at <a href="https://www.novoinvent.com/">Novoinvent Software</a> · Delhi, India</sub>
</p>

<p align="center">
  <a href="https://ashjha75.github.io/portfolio-web"><img src="https://img.shields.io/badge/Portfolio-0C0C0E?style=for-the-badge&logo=google-chrome&logoColor=EC9440" alt="Portfolio"/></a>
  <a href="https://www.linkedin.com/in/ashish5jha"><img src="https://img.shields.io/badge/LinkedIn-0C0C0E?style=for-the-badge&logo=linkedin&logoColor=EC9440" alt="LinkedIn"/></a>
  <a href="https://x.com/ashish5jha"><img src="https://img.shields.io/badge/X-0C0C0E?style=for-the-badge&logo=x&logoColor=EC9440" alt="X"/></a>
  <a href="https://ashjha75.github.io/MyDocs"><img src="https://img.shields.io/badge/Blog-0C0C0E?style=for-the-badge&logo=readme&logoColor=EC9440" alt="Blog"/></a>
  <a href="mailto:network.ashishjha@gmail.com"><img src="https://img.shields.io/badge/Email-0C0C0E?style=for-the-badge&logo=gmail&logoColor=EC9440" alt="Email"/></a>
  <a href="https://ashjha75.github.io/portfolio-web/resume.pdf"><img src="https://img.shields.io/badge/Résumé-EC9440?style=for-the-badge&logo=readme&logoColor=0C0C0E" alt="Resume"/></a>
</p>

---

I build backend systems that hold up under load. Two years at Novoinvent Software,
working in Java and Spring Boot on the parts that break when traffic arrives —
multi-tenancy, concurrency control, and the data layer.

Most of what is pinned below exists because I wanted to understand something
properly. The task scheduler is there because I wanted to know how one actually
behaves at the thread level, not because I needed a scheduler.

---

### Stack, by layer

| Layer | What I use |
|---|---|
| **Core** | Java 21 · Spring Boot · Spring Security · Spring Data JPA · Concurrency · REST / OpenAPI |
| **Data** | PostgreSQL · MySQL · Redis · Flyway · MongoDB |
| **Infrastructure** | Docker · AWS (EC2, S3, Lambda, ECS, EKS, RDS) · GitHub Actions · Jenkins · Linux |
| **Interfaces & AI** | Next.js · TypeScript · Node.js · Express · LangChain · LLM agent tooling |

Intermediate across all of it — comfortable in production, still learning the deep end.

---

### Experience

**Software Engineer** — Novoinvent Software · *Jun 2024 – Present* · Hybrid
- Build and maintain Spring Boot services backed by MySQL, owning features from schema through to endpoint.
- Improved application performance by **15%** by extracting reusable components and reworking hot paths.
- Deploy to production on a regular cadence, keeping downtime minimal.

**Software Intern** — Novoinvent Software · *Mar 2023 – May 2024* · Remote
- Built web application features with Angular and Node.js alongside senior engineers.
- Implemented REST APIs for data retrieval and manipulation, accelerating feature releases by **25%**.
- Worked day to day in Linux shell scripting and Git.

---

### Selected work

**[Multi-tenant SaaS Platform](https://github.com/Ashjha75/Multi-tenant-saas-app)** — *Java 21 · Spring Boot · PostgreSQL · Flyway · Docker*
One deployment serving many tenants, with each tenant's data isolated at the schema
level rather than by a WHERE clause. Tenants are provisioned at runtime — schema
created and migrated on demand, no redeploy.

**[Multi-threaded Task Scheduler](https://github.com/Ashjha75/Multi-threaded-task-scheduler)** — *Java · ThreadPoolExecutor · PriorityBlockingQueue*
Holds thousands of tasks across a worker pool without locks in the hot path. State
moves only through compare-and-set, so no task runs twice; failures retry with
exponential backoff instead of blocking a worker.

**[Ticketing System](https://github.com/Ashjha75/ticketing-system)** — *Spring Boot · PostgreSQL · Redis*
Ticket booking where the hard part is contention. Inventory is decremented under a
concurrency guard so the system cannot oversell, with Redis caching hot event reads.

**[Code To Context](https://github.com/Ashjha75/CodeToContext)** — *JavaScript · LLM tooling*
Turns a local codebase into structured, token-aware context for an LLM — without the
source ever leaving the machine.

**[Express REST API](https://github.com/Ashjha75/Express-APi-s-Learning)** — *Express · TypeScript · MongoDB*
A typed Express service covering the parts that matter in production: JWT auth,
role-based access, validation, and a single error-handling layer.

[Browse the rest →](https://github.com/Ashjha75?tab=repositories)

---

### Also

- **Education** — B.Tech, Computer Science · R.D. Engineering College, Duhai, UP · 2020–2024 · CGPA 7.85/10
- **Leadership** — Led the internal tools team at Novoinvent; led a team of 4 on a final-year project end to end.
- **Currently** — building an LLM agent harness, for the same reason as the scheduler.
