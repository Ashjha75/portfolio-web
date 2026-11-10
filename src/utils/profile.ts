export const profile = {
  name: "Ashish Kumar Jha",
  role: "Backend Engineer",
  focus: "Java · Spring Boot · PostgreSQL · AWS",
  location: "Delhi, India",
  available: true,
  // Personal address on purpose: recruiters should not be mailing a
  // candidate at their current employer's domain.
  email: "network.ashishjha@gmail.com",
  links: {
    github: "https://github.com/Ashjha75",
    linkedin: "https://www.linkedin.com/in/ashish5jha",
    x: "https://x.com/ashish5jha",
  },
} as const;

/** Proof strip. Every number traces to real work — see docs/03-content-rules.md. */
export const proofPoints = [
  { value: "2+",  label: "Years building backend services" },
  { value: "15%", label: "Application performance gained" },
  { value: "20%", label: "API response time cut" },
  { value: "5",   label: "Systems designed and built" },
] as const;
