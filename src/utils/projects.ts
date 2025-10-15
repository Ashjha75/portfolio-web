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