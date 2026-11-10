export type DiagramKey =
  | "multi-tenant"
  | "scheduler"
  | "ticketing"
  | "context"
  | "express";

export interface Project {
  slug: string;
  title: string;
  kind: string;
  /** One line: the constraint, not the brochure. */
  summary: string;
  /** 2–3 outcomes. What the system actually does under pressure. */
  highlights: string[];
  /** Max 6, highest-signal first. */
  stack: string[];
  diagram: DiagramKey;
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "multi-tenant-saas",
    title: "Multi-tenant SaaS Platform",
    kind: "Spring Boot · PostgreSQL",
    summary:
      "One deployment serving many tenants, with each tenant's data isolated at the schema level rather than by a WHERE clause.",
    highlights: [
      "Tenants are provisioned at runtime — schema created and migrated on demand, no redeploy.",
      "A resolver maps each request to its tenant schema before the transaction opens.",
      "Flyway owns the migrations, run per schema rather than once across a shared database.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "Spring Security", "Docker"],
    diagram: "multi-tenant",
    repoUrl: "https://github.com/Ashjha75/Multi-tenant-saas-app",
    demoUrl: "https://ashjha75.github.io/Multi-tenant-saas-app-ui",
    featured: true,
  },
  {
    slug: "task-scheduler",
    title: "Multi-threaded Task Scheduler",
    kind: "Java · Concurrency",
    summary:
      "A scheduler built from first principles: a priority queue, a fixed worker pool, and the state machine that keeps them honest.",
    highlights: [
      "Priority queue feeds a fixed worker pool; compare-and-set transitions stop two workers claiming the same task at once.",
      "Retries are explicit re-enqueues with exponential backoff, so execution is at-least-once by design, not exactly-once.",
      "Observer-based event publishing keeps metrics and logging out of the execution path.",
    ],
    stack: ["Java 17+", "ThreadPoolExecutor", "PriorityBlockingQueue", "CAS", "Observer", "Maven"],
    diagram: "scheduler",
    repoUrl: "https://github.com/Ashjha75/Multi-threaded-task-scheduler",
    featured: true,
  },
  {
    slug: "ticketing-system",
    title: "Ticketing System",
    kind: "Spring Boot · Redis",
    summary:
      "Ticket booking where the hard part is contention: many people buying the last seat at the same instant.",
    highlights: [
      "Booking runs in a transaction over a pessimistic row lock, so two buyers cannot take the same last seat.",
      "Redis caches hot event reads to keep listing traffic off the primary.",
      "Rate limiting sits in front of the booking endpoint; browsing is paginated and filterable.",
    ],
    stack: ["Java 21", "Spring Boot", "PostgreSQL", "Redis", "Spring Security", "Maven"],
    diagram: "ticketing",
    repoUrl: "https://github.com/Ashjha75/ticketing-system",
  },
  {
    slug: "code-to-context",
    title: "Code To Context",
    kind: "Developer tooling · LLM",
    summary:
      "Turns a local codebase into structured, token-aware context for an LLM — without the source ever leaving the machine.",
    highlights: [
      "Walks a repository and emits structure-aware output instead of a flat file dump.",
      "Parsing happens in the browser — the tool has no backend to upload source to.",
      "Filters noise (build output, lockfiles, binaries) before anything reaches the prompt.",
    ],
    stack: ["JavaScript", "Code parsing", "Markdown", "LLM context"],
    diagram: "context",
    repoUrl: "https://github.com/Ashjha75/CodeToContext",
  },
  {
    slug: "express-apis",
    title: "Express REST API",
    kind: "Node.js · TypeScript",
    summary:
      "A typed Express service covering the parts that matter in production: auth, roles, validation and error handling.",
    highlights: [
      "JWT auth with role-based access control across admin and user routes.",
      "Request validation and a single error-handling layer, so failures return a consistent shape.",
      "Mongoose models with typed schemas end to end.",
    ],
    stack: ["Express", "Node.js", "TypeScript", "MongoDB", "Mongoose"],
    diagram: "express",
    repoUrl: "https://github.com/Ashjha75/Express-APi-s-Learning",
  },
];
