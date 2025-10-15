export interface TimelineEvent {
  year: string;
  description: string;
  id: number;
}

const timelineData: TimelineEvent[] = [
  {
    id: 7,
    year: "2025",
    description: "Continuing to grow as a developer, taking on new challenges, and contributing to impactful projects in the tech industry.",
  },
  {
    id: 6,
    year: "2024",
    description: "Graduated with a B.Tech in Computer Science and Engineering. Started working full-time as a software developer, embarking on an exciting new professional journey.",
  },
  {
    id: 5,
    year: "2023",
    description: "Secured an internship, gaining valuable industry experience. Now in the 4th year of college, I continued to build on my web development skills.",
  },
  {
    id: 4,
    year: "2022",
    description: "Progressed to the 3rd year of college. This year was marked by deeper dives into web development, exploring various frameworks and enhancing my skills.",
  },
  {
    id: 3,
    year: "2021",
    description: "Entered the 2nd year of college. My interest in web development grew stronger, and I spent a significant amount of time experimenting with HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    year: "2020",
    description: "Graduated 12th standard with 82.8%. Despite the global outbreak of the Coronavirus, I adapted to online classes and continued to excel academically. This year, I also joined college to pursue a B.Tech in Computer Science and Engineering.",
  },
  {
    id: 1,
    year: "2018",
    description: "Completed 10th standard with an impressive 88%. This year marked the beginning of my academic journey towards higher education.",
  },
];

export default timelineData;
