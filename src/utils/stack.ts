export interface StackGroup {
  layer: string;
  note: string;
  items: { name: string; icon: string }[];
}

/** Ordered by depth — what I write daily, what I have built with, what I deploy
 *  with — rather than 15 undifferentiated logo pills where Kafka sits next to npm. */
export const stackGroups: StackGroup[] = [
  {
    layer: "Daily, in production",
    note: "What I write at work every day and own from schema through to endpoint.",
    items: [
      { name: "Java 21",        icon: "simple-icons:openjdk" },
      { name: "Spring Boot",    icon: "simple-icons:springboot" },
      { name: "Spring Security",icon: "simple-icons:springsecurity" },
      { name: "Spring Data JPA",icon: "simple-icons:hibernate" },
      { name: "MySQL",          icon: "simple-icons:mysql" },
      { name: "PostgreSQL",     icon: "simple-icons:postgresql" },
    ],
  },
  {
    layer: "Built with, hands-on",
    note: "Designed and debugged in the projects on this page, not daily at work.",
    items: [
      { name: "Concurrency",    icon: "lucide:cpu" },
      { name: "REST / OpenAPI", icon: "simple-icons:openapiinitiative" },
      { name: "Redis",          icon: "simple-icons:redis" },
      { name: "Flyway",         icon: "lucide:layers" },
      { name: "MongoDB",        icon: "simple-icons:mongodb" },
      { name: "Docker",         icon: "simple-icons:docker" },
    ],
  },
  {
    layer: "Deploy and run",
    note: "Intermediate: I containerise services, run them on AWS and keep the pipeline green. Not my deepest ground.",
    items: [
      { name: "AWS",            icon: "simple-icons:amazonwebservices" },
      { name: "Lambda",         icon: "simple-icons:awslambda" },
      { name: "ECS / EKS",      icon: "lucide:boxes" },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
      { name: "Linux",          icon: "simple-icons:linux" },
    ],
  },
  {
    layer: "Interfaces & AI",
    note: "The frontend I reach for when a service needs a UI, and the LLM tooling behind the agent harness I'm building.",
    items: [
      { name: "Next.js",    icon: "simple-icons:nextdotjs" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
      { name: "Node.js",    icon: "simple-icons:nodedotjs" },
      { name: "Express",    icon: "simple-icons:express" },
      { name: "LangChain",  icon: "simple-icons:langchain" },
      { name: "LLM agents", icon: "lucide:bot" },
    ],
  },
];
