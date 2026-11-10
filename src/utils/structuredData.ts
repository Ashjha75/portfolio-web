import { profile } from "./profile";
import { experience } from "./experience";
import { projects } from "./projects";
import { stackGroups } from "./stack";

export const SITE = "https://ashjha75.github.io/portfolio-web";

const skills = stackGroups.flatMap((g) => g.items.map((i) => i.name));

/** schema.org Person — the canonical machine description of Ashish. */
export const personSchema = {
  "@type": "Person",
  "@id": SITE + "/#person",
  name: profile.name,
  givenName: "Ashish",
  familyName: "Jha",
  jobTitle: profile.role,
  description:
    profile.role +
    " working in Java and Spring Boot on multi-tenant architecture, concurrency and the data layer.",
  url: SITE,
  email: "mailto:" + profile.email,
  image: SITE + "/images/ashishp1.jpeg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Novoinvent Software",
    url: "https://www.novoinvent.com/",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "R.D. Engineering College",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Duhai",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  knowsAbout: skills,
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.x],
  seeks: profile.available
    ? { "@type": "Demand", name: "Software engineering roles (backend / Java / Spring Boot)" }
    : undefined,
  hasOccupation: experience.map((job) => ({
    "@type": "Occupation",
    name: job.role,
    occupationLocation: { "@type": "Country", name: "India" },
    description: job.points.join(" "),
  })),
};

/** Each project as SoftwareSourceCode so agents can enumerate the work. */
export const projectSchemas = projects.map((p) => ({
  "@type": "SoftwareSourceCode",
  name: p.title,
  description: p.summary,
  abstract: p.highlights.join(" "),
  programmingLanguage: p.stack,
  codeRepository: p.repoUrl,
  url: p.demoUrl || p.repoUrl,
  author: { "@id": SITE + "/#person" },
}));

/** Full graph embedded in the page head and served at /profile.json. */
export const graph = {
  "@context": "https://schema.org",
  "@graph": [
    personSchema,
    {
      "@type": "WebSite",
      "@id": SITE + "/#website",
      url: SITE,
      name: profile.name + " — Portfolio",
      inLanguage: "en",
      publisher: { "@id": SITE + "/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": SITE + "/#page",
      url: SITE,
      name: profile.name + " — " + profile.role,
      isPartOf: { "@id": SITE + "/#website" },
      about: { "@id": SITE + "/#person" },
      mainEntity: { "@id": SITE + "/#person" },
    },
    ...projectSchemas,
  ],
};
