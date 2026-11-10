export const profile = {
  name: "Ashish Kumar Jha",
  role: "Backend Engineer",
  focus: "Java · Spring Boot · PostgreSQL · AWS",
  location: "India",
  available: true,
  email: "ashish.jha@novoinvent.com",
  links: {
    github: "https://github.com/Ashjha75",
    linkedin: "https://www.linkedin.com/in/ashish-kumar-jha-7b1b3b1b1/",
    x: "https://x.com/Ashish5jha",
  },
} as const;

/** Proof strip. Every number traces to real work — see docs/03-content-rules.md. */
export const proofPoints = [
  { value: "2+",  label: "Years building backend services" },
  { value: "15%", label: "Application performance gained" },
  { value: "20%", label: "API response time cut" },
  { value: "5",   label: "Systems shipped end to end" },
] as const;
