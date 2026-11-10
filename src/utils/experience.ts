export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  current?: boolean;
  points: string[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Novoinvent Software",
    companyUrl: "https://www.novoinvent.com/",
    period: "Jun 2024 — Present",
    current: true,
    points: [
      "Build and maintain Spring Boot services backed by MySQL, owning features from schema through to endpoint.",
      "Improved application performance by 15% by extracting reusable components and reworking hot paths.",
      "Deploy to production on a regular cadence, keeping downtime minimal.",
      "Work in an Agile team — sprint planning, code review, feature delivery.",
    ],
  },
  {
    role: "Software Intern",
    company: "Novoinvent Software",
    companyUrl: "https://www.novoinvent.com/",
    period: "Mar 2023 — May 2024",
    points: [
      // Angular stays here: this is a factual claim about work at a named employer.
      "Built web application features with Angular and Node.js alongside senior engineers.",
      "Implemented REST APIs for data retrieval and manipulation, cutting response times by 20%.",
      "Tested and debugged across platforms to keep behaviour consistent.",
      "Worked day to day in Linux shell scripting and Git.",
    ],
  },
];

export default experience;
