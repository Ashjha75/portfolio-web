export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Multi-tenant-saas-app",
    description: "Scalable multi-tenant SaaS platform built with Spring Boot and PostgreSQL, featuring dynamic tenant provisioning, schema isolation, JWT authentication, and enterprise-grade backend architecture.",
    techStack: [
      "Java",
      "Spring Boot 4.0.6",
      "Spring Security",
      "Spring Data JPA",
      "Spring Validation",
      "Spring DevTools",
      "PostgreSQL",
      "H2 Database",
      "Maven",
      "JWT (JJWT 0.12.6)",
      "Lombok",
      "Flyway (Database Migrations)",
      "SpringDoc OpenAPI",
      "Jackson",
      "Docker"
    ],
    features: [
      "Dynamic tenant provisioning",
      "Schema isolation",
      "JWT authentication",
      "Spring Security integration",
      "Database migrations with Flyway",
      "REST API documentation with OpenAPI",
      "Input validation",
      "Docker support",
      "Enterprise-grade backend architecture"
    ],
    demoUrl: "https://ashjha75.github.io/Multi-tenant-saas-app-ui",
    repoUrl: "https://github.com/Ashjha75/Multi-tenant-saas-app",
    topics: [
      "docker",
      "java",
      "multi-tenant-architecture",
      "postgres",
      "saas",
      "spring-security-jwt",
      "springboot"
    ],
    primaryLanguage: "Java (98.6%)",
    javaVersion: "21",
    buildTool: "Maven",
    defaultBranch: "dev_v1"
},
   {
    title: "Ticketing-system",
    description: "High-concurrency ticket booking backend built with Spring Boot, focusing on safe inventory handling, caching, and real-world backend design patterns.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "postgres", "Maven", "Redis","Angular","Spring Security"],
    features: [
      "User Registration and Authentication",
      "Event creation and management (admin)",
      "Event browsing with filtering and pagination",
      "Ticket booking with concurrency control",
      "Inventory management to prevent overselling",
    ],
    demoUrl: "ashjha75.github.io/ticketing-system/",
    repoUrl: "https://github.com/Ashjha75/ticketing-system",
  },
  {
    title: "Spring-Commerce",
    description: "Spring Commerce: A powerful backend implementation for an eCommerce platform built with Spring Boot....",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Maven", "Redis"],
    features: [
      "User Registration and Authentication",
      "Role-based Access Control (Admin, User)",
      "Product Management (CRUD operations)",
      "Order Management (Create, Read, Update, Delete)",
    ],
    demoUrl: "null",
    repoUrl: "https://github.com/Ashjha75/spring-commerce",
  },
  {
    title: "Express APIs App",
    description: "Express APIs: A comprehensive set of RESTful APIs built with Express.js, designed to facilitate communication....",
    techStack: ["Express", "Node.js", "MongoDB", "Mongoose", "TypeScript"],
    features: [
      "User Registration and Authentication",
      "Role-based Access Control (Admin, User)",
      "Integration with External Services",
      "Error Handling and Validation",
    ],
    demoUrl: "null",
    repoUrl: "https://github.com/Ashjha75/Express-APi-s-Learning",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio showcasing skills and projects with smooth animations and responsive design.",
    techStack: ["Astro", "TypeScript", "Tailwind CSS"],
    features: [
      "Static Site Generation with Astro",
      "Smooth Scroll Animations",
      "Fully Responsive Design",
      "Dark Mode Support",
    ],
    demoUrl: "null",
    repoUrl: "https://github.com/Ashjha75/portfolio-web",
  },
  {
    title: "Patient Management System",
    description: "A production-ready Patient Management System built with Java Spring Boot for healthcare providers.",
    techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Maven", "Redis"],
    features: [
      "User Registration and Authentication",
      "Role-based Access Control (Admin, User)",
      "Patient Management (CRUD operations)",
      "Appointment Scheduling System",
    ],
    demoUrl: "null",
    repoUrl: "https://github.com/Ashjha75/Patient-Management-System",
  },
  {
    title: "Code To Context",
    description: "A privacy-first tool converting local codebases into structured prompts for AI models and development.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Code-Context", "Markdown Editor"],
    features: [
      "Structure-Aware Output Generation",
      "100% Private & Secure Processing",
      "AI Ready Codebase Conversion",
      "Intelligent File Handling System",
    ],
    demoUrl: "null",
    repoUrl: "https://github.com/Ashjha75/CodeToContext",
  },
];
