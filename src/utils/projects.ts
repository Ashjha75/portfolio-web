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
    title: "Project Title",
    description: "A brief summary of what the project does and the problem it solves.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
      "Authentication & Authorization",
      "Responsive UI with Tailwind",
      "RESTful API Integration",
    ],
    demoUrl: "#",
    repoUrl: "#",
  },
  // Add more projects here
];
