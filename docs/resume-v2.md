# Résumé v2 — draft replacement for `public/resume.pdf`

Purpose: stop the résumé and the portfolio describing two different candidates
(see `docs/chatgpt.md`, Problem 1). Every factual line below traces to the current
`public/resume.pdf` or to `src/utils/{profile,experience,projects,stack}.ts`.
Nothing new was invented. Open questions are in Part 3 — resolve those before typesetting.

Governing policy: `docs/03-content-rules.md`.

---

## Part 1 — The résumé

> ATS notes: plain headings, no tables, no columns, no graphics, no text boxes.
> Target one page. If it runs over, cut in this order: Leadership block → the
> "Additional projects" lines → the fourth bullet of the Software Engineer role.

---

# Ashish Kumar Jha

**Backend Engineer** — Java · Spring Boot · PostgreSQL · AWS

Delhi, India · 8860673349 · network.ashishjha@gmail.com
linkedin.com/in/ashish5jha · github.com/Ashjha75 · ashjha75.github.io/portfolio-web

## Summary

Backend engineer with 2+ years full-time at Novoinvent Software, joined as an intern in 2023.
Java and Spring Boot services, relational schema design, and correctness under concurrency —
schema-isolated multi-tenancy, a scheduler built on compare-and-set state transitions, and
ticket inventory held correct under a database-level lock.

## Technical Skills

**Core:** Java 21, Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST / OpenAPI
**Data:** PostgreSQL, MySQL, Redis, Flyway, MongoDB
**Concurrency:** ThreadPoolExecutor, PriorityBlockingQueue, compare-and-set state transitions
**Infrastructure:** Docker, AWS (EC2, S3, Lambda, ECS, EKS, RDS), GitHub Actions, Git, Linux
**Also:** TypeScript, Node.js, Express, Next.js, LangChain

## Experience

**Novoinvent Software — Software Engineer** | Jun 2024 – Present | Hybrid

- Build and maintain Spring Boot services backed by MySQL, owning features from schema through to endpoint.
- Improved application performance by 15% by extracting reusable components and reworking hot paths.
- Deploy to production on a regular cadence, keeping downtime minimal.
- Work in an Agile team: sprint planning, code review, feature delivery.

**Novoinvent Software — Software Intern** | Mar 2023 – May 2024 | Remote

- Built web application features with Angular and Node.js alongside senior engineers.
- Implemented REST APIs for data retrieval and manipulation, cutting response times by 20%.
- Debugged across browsers and platforms to keep behaviour consistent; worked day to day in Linux shell and Git.

## Projects

**Multi-tenant SaaS Platform** — Java 21, Spring Boot, PostgreSQL, Flyway, Spring Security, Docker
github.com/Ashjha75/Multi-tenant-saas-app

- One deployment serves many tenants, with each tenant's data isolated at the schema level rather than by a WHERE clause.
- Tenants are provisioned at runtime: schema created and migrated on demand, no redeploy.
- A resolver maps each request to its tenant schema before the transaction opens; Flyway runs migrations per schema.

**Multi-threaded Task Scheduler** — Java 17+, ThreadPoolExecutor, PriorityBlockingQueue, CAS, Maven
github.com/Ashjha75/Multi-threaded-task-scheduler

- Built from first principles: a priority queue, a fixed worker pool, and the state machine that keeps them honest.
- Priority queue feeds a fixed worker pool; CAS-protected state transitions stop two workers claiming the same task.
- Retries are explicit re-enqueues with exponential backoff, so execution is at-least-once by design, not exactly-once; observer-based events keep metrics and logging off the execution path.

**Ticketing System** — Java, Spring Boot, PostgreSQL, Redis, Spring Data JPA
github.com/Ashjha75/ticketing-system

- Booking under contention: many buyers competing for the last seat at the same instant.
- Booking runs in a transaction over a pessimistic row lock, so two buyers cannot take the same last seat.
- Redis caches hot event reads to keep listing traffic off the primary; rate limiting sits in front of the booking endpoint.

**Additional projects**

- **Nav Finder Backend** (Jun 2024) — Node.js, Express, MongoDB, Mongoose, AWS, OAuth. REST APIs for travel bookings, item shipments and travel logistics; deployed on AWS with OAuth authentication.
- **Code To Context** — github.com/Ashjha75/CodeToContext. Turns a local codebase into structured, token-aware LLM context; parsing happens in the browser and the tool has no backend to upload source to.
- **Express REST API** — github.com/Ashjha75/Express-APi-s-Learning. Typed Express service with JWT auth, role-based access, request validation and one error-handling layer.

## Education

**R.D. Engineering College**, Duhai, Uttar Pradesh — B.Tech, Computer Science | Sep 2020 – May 2024 | CGPA 7.85/10

## Leadership

**Team Lead, Internal Tools — Novoinvent Software** | Aug 2024

- Led a team building internal tools with Angular and Node.js, improving operational workflows.
- Ran sprint planning and retrospectives; mentored new joiners on coding standards and Git.

---

## Part 2 — What changed and why

| # | Old résumé | New résumé | Why |
|---|---|---|---|
| 1 | Title: **Software Developer** | Title: **Backend Engineer** | The portfolio, `profile.ts` (`role: "Backend Engineer"`) and both reviews treat him as a backend candidate targeting mid-level Java/Spring Boot roles. "Software Developer" is generic and contradicts the site. His *employment* title stays "Software Engineer" in the Experience block, so nothing factual changes. |
| 2 | No summary | Three-line summary | A recruiter reading only the top third now gets the same story as the portfolio hero. Uses only facts already present (2+ years, one company, the three systems). |
| 3 | No location, no portfolio link | Delhi, India + ashjha75.github.io/portfolio-web | Location from `profile.ts`. The portfolio link closes the loop: PDF → site → repos. |
| 4 | Skills: `MongoDB, MySQL, Docker, Git, Jenkins`; no PostgreSQL, Redis, AWS or Flyway | Core → Data → Concurrency → Infrastructure, led by Java / Spring Boot / PostgreSQL | The single largest mismatch. The portfolio leads with PostgreSQL and Redis; the old résumé mentioned neither. Skills now mirror `stack.ts` layer for layer. |
| 5 | Skills listed **React, Angular** | Skills list **Next.js** | `docs/03-content-rules.md`: skill framing may change, history may not. Angular stays in the internship bullet and the Leadership entry, where it is a factual claim about a named employer. |
| 6 | Jenkins in skills | Removed | Not in `stack.ts`; the portfolio presents GitHub Actions. Gemini's stress-test question 6 attacks the deployment-speed claim via Jenkins. See Part 3 Q4 — put it back if he still uses it. |
| 7 | Intern bullet: *"accelerating feature releases by 25%"* | *"cutting response times by 20%"* | **Unresolved — see Part 3 Q1.** Chosen for this draft only because `docs/03-content-rules.md` ("Metrics") lists 20% as traceable to real work and does not list 25% at all. Do not ship until he confirms. |
| 8 | SE bullet: *"leveraging Java, Spring Boot, and MySQL… scalable, high-performance backend systems"* | *"Build and maintain Spring Boot services backed by MySQL, owning features from schema through to endpoint"* | "Leveraging" is on the cut list. "Scalable, high-performance" is an adjective doing a number's job; ChatGPT Problem 7 and Gemini's blocker both ask what he personally owns. MySQL is kept — it is what the day job uses. |
| 9 | SE bullet: *"improving codebase efficiency and boosting application performance by 15%"* | *"Improved application performance by 15% by extracting reusable components and reworking hot paths"* | Same number, now attached to a mechanism. Gemini: *"What exactly was boosted by 15%?"* — this is as far as the sources allow. See Part 3 Q2. |
| 10 | Projects: Nav Finder, Express API Learning, Spring Commerce | Multi-tenant SaaS, Task Scheduler, Ticketing System (full) + Nav Finder, Code To Context, Express REST API (one line each) | ChatGPT §8: the memorable combination is *multi-tenancy + low-level scheduler + ticketing contention*. None of the three was on the résumé. Nav Finder and Express survive in compressed form; Spring Commerce is dropped (Part 3 Q5). |
| 11 | Express project claimed *"seamless communication"*, OAuth, AWS, "large-scale data" | Typed Express service, JWT auth, RBAC, validation, one error layer | Same repository (`Express-APi-s-Learning`) as the portfolio's "Express REST API", but the two documents described it differently — including **OAuth vs JWT**. The portfolio wording is more specific and more recent. See Part 3 Q6. |
| 12 | Scheduler absent; portfolio says *"no task runs twice"* | *"CAS-protected state transitions stop two workers claiming the same task"* + *"re-enqueue with exponential backoff"* | ChatGPT Problem 3: "no task runs twice" is too absolute sitting next to a retry policy. The résumé uses the safer wording; the portfolio card should be changed to match (not my file). |
| 13 | Ticketing absent; portfolio says *"a concurrency guard"* | *"a database-level concurrency guard"* | The ticketing README documents database-level pessimistic locking (ChatGPT §6). Naming the layer invites the right interview question instead of a vague one. |
| 14 | Leadership: University Projects (Mar–Jun 2023) + Novoinvent Internal Tools (Aug 2024) | Novoinvent Internal Tools only | A 2+ YOE engineer gains nothing from a 2023 college team-lead entry, and the page is one side. See Part 3 Q7. |
| 15 | Name: **Ashish Jha** | **Ashish Kumar Jha** | `profile.ts`, `structuredData.ts` and both reviews use the full name. Pick one and use it everywhere — Part 3 Q8. |
| 16 | Education directly under the header | Education below Projects | He graduated May 2024 and has 2+ years of full-time work. Work and projects belong above the fold; the dates and CGPA are unchanged. |

---

## Part 3 — Decisions you need to make

**Q1 — 20% or 25%, and are they the same work?** *(blocking)*
The portfolio says the internship *"cut response times by 20%"*. The current PDF says it
*"accelerat[ed] feature releases by 25%"*. These describe different things — API latency versus
delivery cadence — so both may be true of different work in the same 14-month internship, or one
may be stale copy. I cannot tell from the repo, and I will not guess.
*Risk if unresolved:* a recruiter holds the PDF next to the site and sees one role producing two
unrelated headline numbers. That reads as number-shopping — exactly the suspicion Gemini raised
unprompted ("these percentages sound templated"). Worse, any interviewer who sees the 25% will ask
how it was measured; Gemini wrote an interview question specifically for it.
*Options:* (a) keep 20% only and drop 25% from both documents; (b) keep both, as two separate
bullets, if both are genuinely yours and you can state a baseline for each; (c) keep 25% and change
the portfolio instead. Do **not** leave the two documents disagreeing.

**Q2 — What does the 15% actually measure?**
Both documents say "application performance" improved 15%. Gemini asks directly: CPU, query
latency, render time, throughput? Give me the quantity and the before/after and I will rewrite the
bullet to name it. If it was an internal estimate rather than instrumented, say so and we word it
as an estimate.

**Q3 — Is PostgreSQL only project work?**
The day job is MySQL (both the PDF and `experience.ts` say so), while the portfolio leads with
PostgreSQL and `profile.ts` sets focus to `Java · Spring Boot · PostgreSQL · AWS`. I kept the
skills block PostgreSQL-first and the job bullet MySQL. Confirm that is accurate — if PostgreSQL is
also in production at Novoinvent, the SE bullet should say so, and that is a stronger résumé.

**Q4 — Jenkins: current or historical?**
I removed it because `stack.ts` does not list it and the portfolio shows GitHub Actions. If you
still run Jenkins pipelines, it goes back into Infrastructure.

**Q5 — Spring Commerce: drop it?**
My recommendation: **drop**. `docs/03-content-rules.md` already cut it from the portfolio as
overlapping the Ticketing System, and the old bullets (*"secure payment integration"*, *"support
growing online businesses"*, *"optimized performance and scalability"*) are the least defensible
text on the current PDF — no mechanism, no number. The repo stays public, so nothing is lost;
Gemini's crawl already found it. Overrule me if the payment-integration work is substantial and
distinct from Ticketing, in which case it should *replace* one of the three featured projects
rather than be added to them.

**Q6 — Nav Finder Backend: keep, promote, or cut?**
My recommendation: **keep, as written** (one compressed line). Reasons to keep: it is real
REST/AWS/OAuth work on a named product, and it is the only item in either document showing a
deployed external-facing service — something both reviewers say is missing. Reasons it is not a
featured project: it is the weakest of the six on specificity (no constraint, no mechanism, no
number), it is absent from the portfolio entirely, and I found no public repository for it —
Gemini's crawl of your GitHub listed Multi-tenant, Ticketing, task-scheduler, spring-commerce and
naruto-card-clash, but no Nav Finder. Three things I need from you:
1. Is there a public repo or live URL? If yes it gets a link, and promotion becomes arguable.
2. Was this employer/client work or personal? It is dated June 2024, the same month the Software
   Engineer role began. If it was Novoinvent work it may belong in the Experience block instead,
   and it may not be yours to publish.
3. Its tech-stack line in the current PDF is **character-for-character identical** to Express API
   Learning's. One of the two is almost certainly a copy-paste. Which stack is right?
If you want it on the portfolio too, that is a `projects.ts` change — not my file.

**Q7 — University Projects leadership entry: drop?**
My recommendation: drop, as I have. Restore it only if you are also applying where a 2023 college
team-lead entry carries weight.

**Q8 — "Ashish Jha" or "Ashish Kumar Jha"?**
The PDF says the first; the portfolio and its schema.org data say the second. Use the same one on
the résumé, the site, LinkedIn and GitHub.

**Q9 — Testing and observability: can we claim anything?**
Both reviewers call this the clearest gap for 2–4 YOE (Gemini §6: JUnit, Mockito, Testcontainers;
Prometheus/Grafana/ELK). I found no source for any of it in the PDF or the repo, so I claimed none
of it. If you genuinely write JUnit or integration tests at work, that is one line in Skills and
probably the highest-value single addition to this document. Tell me which, and whether the project
repos have concurrency tests.

**Q10 — Production ownership.**
ChatGPT Problem 7: *"Deploy to production on a regular cadence"* does not say what you own. One
concrete sentence — a release you ran, a migration you shipped, an incident you debugged, a
rollback you executed — would replace that bullet with something an interviewer can engage with.
I have nothing to source it from.

**Q11 — Scale figures.**
Gemini's single biggest blocker is the absence of load numbers (RPS, user counts, data volume). The
scheduler line says "thousands of tasks", taken from the portfolio copy. If that is not measured,
say so and I will cut it. Do not let anyone add an RPS figure that was never measured.

**Q12 — Who regenerates the PDF?**
This file is Markdown. `public/resume.pdf` is LaTeX-typeset. Someone has to rebuild the PDF from
this content and replace the file — I did not touch `public/`. The filename should stay
`resume.pdf` so the existing "Download résumé" link keeps working.

---

## Appendix — mismatches found beyond the five in the brief

Checked the PDF against `src/utils/*` and the two reviews:

1. **Name** — "Ashish Jha" (PDF) vs "Ashish Kumar Jha" (`profile.ts`, `structuredData.ts`, both reviews).
2. **Jenkins** — PDF skills list it; `stack.ts` does not, and shows GitHub Actions instead.
3. **OAuth vs JWT on the same repository** — the PDF's "Express API Learning" claims OAuth and AWS
   deployment; the portfolio's "Express REST API" claims JWT with role-based access and no AWS.
   Both point at the same repo, `Ashjha75/Express-APi-s-Learning`.
4. **Identical stack strings** — Nav Finder Backend and Express API Learning carry byte-identical
   technology lines in the PDF, despite being different projects three months apart.
5. **Project count** — `profile.ts` advertises "5 Systems shipped end to end"; the PDF shows 3, and
   only one of them overlaps the portfolio's five.
6. **AWS** — claimed at intermediate depth in `docs/03-content-rules.md` and listed in `stack.ts`,
   but absent from the PDF's skills line (it appears only inside project tech tags).
7. **Location** — the PDF gives no current location, only the college's (Duhai, UP). The portfolio
   and schema.org say Delhi, India.
8. **Angular is current, not historical** — the PDF's own Leadership entry dates Angular and
   Node.js internal-tools work to **Aug 2024**, two months into the backend-focused Software
   Engineer role. The Next.js framing is still defensible for a skills list per
   `docs/03-content-rules.md`, but anyone reading closely will see Angular in 2024. Be ready for
   the question.
9. **Voice** — the current PDF contains "seamless communication", "leveraging" (twice) and
   "comprehensive". All are on the cut list in `docs/03-content-rules.md`. None survive in Part 1.
