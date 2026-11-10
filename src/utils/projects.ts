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
      "Flyway runs migrations per schema, so tenants can sit on different versions safely.",
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
      "A scheduler built from first principles to hold thousands of tasks across a worker pool without locks in the hot path.",
    highlights: [
      "Priority queue feeds a fixed worker pool; state moves only through compare-and-set, so no task runs twice.",
      "Failures retry with exponential backoff instead of blocking a worker.",
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
      "Inventory is decremented under a concurrency guard, so the system cannot oversell.",
      "Redis caches hot event reads to keep listing traffic off the primary.",
      "Browsing is paginated and filterable rather than loading the full catalogue.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Spring Data JPA", "Angular"],
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
      "Runs entirely client-side, so private code is never uploaded.",
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
