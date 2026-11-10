# Portfolio v2 — Working Docs

Branch: `dev_v2`. Target role: **Backend Engineer (Java / Spring Boot)**.

These docs are the source of truth for the redesign. Read in order:

| Doc | What's in it |
|---|---|
| [01-audit.md](./01-audit.md) | What was wrong with v1, with evidence. Why we're rebuilding. |
| [02-design-system.md](./02-design-system.md) | Colour, type, spacing, elevation, motion. The rules. |
| [03-content-rules.md](./03-content-rules.md) | What we claim and what we don't. Angular→Next.js policy. |
| [04-phase-1.md](./04-phase-1.md) | Phase 1 scope, section plan, checklist. |

## Ground rules agreed with Ashish

1. **Backend-first.** Java/Spring Boot leads. Frontend is supporting evidence.
2. **Next.js replaces Angular** as the presented frontend skill — but only where it is
   not a factual claim about past work. See [03](./03-content-rules.md).
3. **No invented projects.** The AI agent harness is listed as a *skill* only; Ashish
   is building it and will add the project himself.
4. **No AI-generated imagery.** Visual assets are hand-authored SVG — architecture
   diagrams, schematics, code artifacts. Nothing stock, nothing generated.
5. **Intermediate level is the honest framing** for AWS, Docker and PostgreSQL.
6. Design decisions are mine to make; Ashish reviews section-by-section after seeing it.

## Running it

Node **26.13.0** is required (Astro 7 needs >= 22.23.4). The `Program Files\nodejs`
symlink currently points at 22.17.1, so either run `nvm use 26.13.0` from an
**admin** terminal once, or prefix commands:

```bash
export PATH="/c/Users/DELL/AppData/Local/nvm/v26.13.0:$PATH"
npm run dev     # http://localhost:4321/portfolio-web
npm run build
npm run check   # astro check — must stay at 0 errors
```
