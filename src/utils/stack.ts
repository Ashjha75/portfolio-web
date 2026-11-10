export interface StackGroup {
  layer: string;
  note: string;
  items: { name: string; icon: string }[];
}

/** Grouped by layer with a line on what he actually does with it — rather than
 *  15 undifferentiated logo pills where Kafka sits next to npm. */
export const stackGroups: StackGroup[] = [
  {
    layer: "Core",
    note: "Where most of my work happens — services, domain logic, data access.",
    items: [
      { name: "Java 21",        icon: "simple-icons:openjdk" },
      { name: "Spring Boot",    icon: "simple-icons:springboot" },
      { name: "Spring Security",icon: "simple-icons:springsecurity" },
      { name: "Spring Data JPA",icon: "simple-icons:hibernate" },
      { name: "Concurrency",    icon: "lucide:cpu" },
      { name: "REST / OpenAPI", icon: "simple-icons:openapiinitiative" },
    ],
  },
  {
    layer: "Data",
    note: "Schema design, migrations, query tuning and caching.",
    items: [
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "MySQL",      icon: "simple-icons:mysql" },
      { name: "Redis",      icon: "simple-icons:redis" },
      { name: "Flyway",     icon: "lucide:layers" },
      { name: "MongoDB",    icon: "simple-icons:mongodb" },
    ],
  },
  {
    layer: "Infrastructure",
    note: "Containerising services and running them on AWS, with CI/CD.",
    items: [
      { name: "Docker",         icon: "simple-icons:docker" },
      { name: "AWS",            icon: "simple-icons:amazonwebservices" },
      { name: "ECS / EKS",      icon: "lucide:boxes" },
      { name: "Lambda",         icon: "simple-icons:awslambda" },
      { name: "GitHub Actions", icon: "simple-icons:githubactions" },
      { name: "Linux",          icon: "simple-icons:linux" },
    ],
  },
  {
    layer: "Interfaces & AI",
    note: "The frontend I reach for, and the LLM tooling I'm building with.",
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
