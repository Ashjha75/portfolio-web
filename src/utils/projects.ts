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
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern, responsive design.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "User Authentication",
      "Product Catalog",
      "Shopping Cart",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative tool for teams to manage projects and tasks.",
    techStack: ["Angular", "Firebase", "Tailwind CSS"],
    features: [
      "Real-time Updates",
      "Drag-and-Drop Interface",
      "Notifications",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    techStack: ["Astro", "TypeScript", "Tailwind CSS"],
    features: [
      "Static Site Generation",
      "Scroll Animations",
      "Responsive Design",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Weather App",
    description: "A simple app to check the weather in any city.",
    techStack: ["Vue.js", "OpenWeatherMap API"],
    features: [
      "City Search",
      "5-Day Forecast",
      "Geolocation",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform with a markdown editor.",
    techStack: ["Next.js", "GraphQL", "PostgreSQL"],
    features: [
      "User Accounts",
      "Markdown Editor",
      "Comment System",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
];
