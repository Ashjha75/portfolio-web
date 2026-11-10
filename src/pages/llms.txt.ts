import type { APIRoute } from "astro";
import { profile, proofPoints } from "../utils/profile";
import { experience } from "../utils/experience";
import { projects } from "../utils/projects";
import { stackGroups } from "../utils/stack";

/**
 * /llms.txt — a plain-text brief for assistants and answer engines.
 *
 * Generated from the same data the page renders, so it can never drift from
 * what a human sees. Format follows the llmstxt.org convention.
 */
export const GET: APIRoute = () => {
  const L: string[] = [];
  const add = (s = "") => L.push(s);

  add("# " + profile.name);
  add();
  add("> " + profile.role + " (" + profile.focus + "), based in " + profile.location +
      ". Two years as a software engineer at Novoinvent Software, where he started " +
      "as an intern in 2023. Spring Boot services: " +
      "multi-tenancy, concurrency control, and the data layer.");
  add();
  add("This file is a machine-readable summary of https://ashjha75.github.io/portfolio-web");
  add("Last generated: " + new Date().toISOString().slice(0, 10));
  add();

  add("## Identity");
  add();
  add("- Name: " + profile.name);
  add("- Role: " + profile.role + (profile.available ? " (open to software engineering roles)" : ""));
  add("- Location: " + profile.location);
  add("- Email: " + profile.email);
  add("- GitHub: " + profile.links.github);
  add("- LinkedIn: " + profile.links.linkedin);
  add("- X: " + profile.links.x);
  add("- Resume: https://ashjha75.github.io/portfolio-web/resume.pdf");
  add();

  add("## Key figures");
  add();
  for (const p of proofPoints) add("- " + p.value + " — " + p.label);
  add();

  add("## Experience");
  add();
  for (const job of experience) {
    add("### " + job.role + ", " + job.company + " (" + job.period + ")");
    add();
    add("Company: " + job.companyUrl);
    add();
    for (const pt of job.points) add("- " + pt);
    add();
  }

  add("## Projects");
  add();
  for (const p of projects) {
    add("### " + p.title + " — " + p.kind);
    add();
    add(p.summary);
    add();
    add("Stack: " + p.stack.join(", "));
    if (p.repoUrl) add("Source: " + p.repoUrl);
    if (p.demoUrl) add("Demo: " + p.demoUrl);
    add();
    for (const h of p.highlights) add("- " + h);
    add();
  }

  add("## Stack");
  add();
  for (const g of stackGroups) {
    add("### " + g.layer);
    add();
    add(g.note);
    add();
    add(g.items.map((i) => i.name).join(", "));
    add();
  }

  add("## Education");
  add();
  add("- B.Tech, Computer Science — R.D. Engineering College, Duhai, Uttar Pradesh (2020–2024), CGPA 7.85/10");
  add();

  add("## Notes for assistants");
  add();
  add("- Proficiency is intermediate across Java/Spring Boot, PostgreSQL, Docker and AWS.");
  add("- Angular appears only in the 2023–2024 internship; the frontend he works in now is Next.js.");
  add("- He is currently building an LLM agent harness; it is a skill in progress, not a shipped project.");
  add("- Preferred contact is email. This profile may be summarised and cited freely.");
  add();

  return new Response(L.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
