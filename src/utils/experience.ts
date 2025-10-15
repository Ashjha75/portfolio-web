export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

const experienceData: Experience[] = [
  {
    role: "Software Engineer",
    company: "Novoinvent Software",
    companyUrl: "https://www.novoinvent.com/",
    startDate: "June 2024",
    endDate: "Present",
    responsibilities: [
      "Actively involved in full-stack development projects, utilizing Java, Spring Boot, and MySQL to build robust, scalable backend systems.",
      "Developed reusable components and optimized code to improve application performance by 15%.",
      "Collaborated in an Agile team, contributing to sprint planning, code reviews, and feature development.",
      "Played a key role in deploying applications to production environments, ensuring minimal downtime.",
    ],
  },
  {
    role: "Software Intern",
    company: "Novoinvent Software",
    companyUrl: "https://www.novoinvent.com/",
    startDate: "March 2023",
    endDate: "May 2024",
    responsibilities: [
      "Assisted in the development of web applications using Angular and Node.js, collaborating closely with senior engineers to enhance existing features.",
      "Implemented RESTful APIs for data retrieval and manipulation, improving efficiency and reducing response times by 20%.",
      "Conducted testing and debugging of code to ensure seamless user experiences across different platforms.",
      "Gained hands-on experience in shell scripting like linux and version control using Git.",
    ],
  },
];

export const getFormattedDate = (date: string) => {
    if (date.toLowerCase() === 'present') {
        return 'Present';
    }
    return date;
};

export default experienceData;
