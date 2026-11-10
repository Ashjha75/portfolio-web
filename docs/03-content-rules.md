# 03 — Content Rules

The portfolio is checked against LinkedIn, the resume, and the public GitHub repos
it links to. Anything that fails that cross-check costs more than it gains. These
rules exist to keep every claim defensible.

## Angular → Next.js

Ashish wants **Next.js** as his presented frontend skill, not Angular. Applied as:

| Location | Action | Why |
|---|---|---|
| `companyLogos.ts` stack list | **Angular → Next.js** | A skills list is "what I work in". His call. |
| `data.ts` Frontend service card | **Rewritten around Next.js** | Same. |
| `Hero.astro` copy | **Angular → Next.js** | Same. |
| `AboutUs.astro` copy | **Angular → Next.js** | Same. |
| `experience.ts:31` — Software Intern bullet | **Stays Angular** | A factual claim about work done at a named, verifiable employer. |
| `projects.ts` — Ticketing-system `techStack` | **Stays Angular** | The repo is public and linked; a reviewer can open it. |

Rule of thumb: **aspiration and skill framing may change; history may not.**

## The AI skill

Ashish is currently building an agent harness. Per his instruction it is listed as
a **skill**, not a project. No invented project ships. He will add the real one.

What is honest to show now:
- **Code To Context** — real, public repo, converts local codebases into structured
  prompts for LLMs. This is genuine AI-adjacent tooling and leads the AI framing.
- **LangChain** — already in his stack list.
- Agent / LLM tooling named in the Stack section under an "AI" layer.

## Claim levels (confirmed by Ashish)

**Intermediate, not beginner** — and the copy says intermediate, never "expert".

- **AWS** — Lambda, EC2, S3, ECS, RDS, EKS, deployments, CI/CD pipelines.
- **Docker** — authors Dockerfiles and Compose stacks, uses Docker models, troubleshoots.
- **PostgreSQL** — comfortable at backend-developer depth (schema, queries, migrations).

Dropped from v1: *"cost optimization"* on AWS. It is the kind of line that invites a
question with no good answer at this level, and removing it costs nothing.

## Metrics

Only numbers that trace to real work:

- `15%` application performance improvement — from the Software Engineer role
- `20%` API response-time reduction — from the Software Intern role
- `2+` years, `2` roles, `1` company — plainly true

**Removed:** 1,500+ Code Commits, 500+ Code Reviews, 200+ Features Delivered,
7+ Enterprise Projects. Commits and reviews are not achievements, and "enterprise"
is wrong for personal learning projects — one of them describes itself as
*"built from first principles to master core Java concurrency"*.

## Projects shipped (5, confirmed)

| Project | Why it's in |
|---|---|
| **Multi-tenant SaaS** | Strongest systems story: dynamic provisioning, schema isolation, Flyway, JWT. |
| **Multi-threaded Task Scheduler** | Deep concurrency: PriorityBlockingQueue, CAS state transitions, backoff retry, Observer/Factory/Strategy. |
| **Ticketing System** | Concurrency under contention — overselling prevention, Redis caching. |
| **Code To Context** | The AI-adjacent entry. |
| **Express APIs App** | Explicitly requested to evidence Express.js / Node. |

**Cut:** Spring-Commerce (overlaps Ticketing), Portfolio Website (this site is not a
portfolio item), Patient Management System (overlaps Multi-tenant).

Tech tags are curated to **max 6 per card**, highest-signal first. v1 dumped 15 on
one card including Lombok, Jackson and H2 — noise that made cards unequal and
unreadable.

## Voice

Cut on sight: "passionate about", "leverage the power of", "elegant, efficient code",
"solve real-world problems", "seamless user experience", "opportunities to be part
of your visions".

Write instead: what was built, the constraint it solved, the result. Short sentences.
Concrete nouns. No adjectives doing work that a number could do.
