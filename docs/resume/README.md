# Résumé

`resume.html` is the source. `public/resume.pdf` is generated from it — never edit
the PDF directly, or the two will drift the way the old one drifted from the site.

```bash
npm run resume      # renders docs/resume/resume.html -> public/resume.pdf
```

The old résumé is preserved at `resume-OLD-backup.pdf`.

## Why HTML and headless Chrome

No LaTeX, Pandoc or Word on this machine, and Chrome produces a PDF with real
selectable text and embedded fonts. Verified on the generated file:

| Property | Value | Why it matters for ATS |
|---|---|---|
| Pages | 1 | Standard at 2 YOE |
| Images | **0** | Text in an image is invisible to a parser |
| Embedded fonts | 4 | Renders identically on any machine |
| Tagged (`/StructTreeRoot`) | yes | Gives parsers real reading order |
| Encrypted | no | Encrypted PDFs fail ingestion outright |
| Annotations / form fields | 0 / 0 | Both confuse parsers |

## ATS rules the markup follows

- **One column.** No tables, no floats, no text boxes — the classic parser killers.
- **DOM order is reading order.** Dates are right-aligned visually with flexbox,
  but they still follow the role and employer in the markup, so a parser reads
  "Software Engineer — Novoinvent Software — Jun 2024 – Present" in that order.
- **Standard headings**: SUMMARY, TECHNICAL SKILLS, EXPERIENCE, PROJECTS,
  LEADERSHIP, EDUCATION. Parsers match on these exact words.
- **Contact details as plain text**, pipe-separated. No icons — an icon font
  renders as a wingding or nothing at all in extracted text.
- **URLs written out** (`github.com/Ashjha75`), not hidden behind labels.
- **Reverse chronological** within each section.

## Decisions baked in — confirm or overrule

1. **Name: "Ashish Kumar Jha"** (the old PDF said "Ashish Jha"). Matches LinkedIn,
   GitHub, the portfolio and the JSON-LD. Use one name everywhere.
2. **Headline: "Backend Engineer"**; employment title stays **Software Engineer**,
   which is the real one. The headline is positioning, the title is fact.
3. **Both intern metrics kept.** The old PDF claimed 25% faster feature releases;
   the portfolio claimed a 20% response-time cut. They measure different things,
   so both now appear as separate bullets rather than one document contradicting
   the other. **If either is not genuinely yours, say so and it comes out** —
   a reviewer who asks about the weaker one will get an answer you can't give.
4. **Spring Commerce dropped**, as it was from the portfolio, for overlapping the
   Ticketing System. The repo stays public.
5. **Nav Finder kept** as one line — it is the only deployed, externally-facing
   service in either document. Note its tech-stack line in the old PDF was
   character-for-character identical to Express API Learning's; I used the
   Nav Finder one. Confirm which is right.
6. **Jenkins left out** of skills: it is in no repo and not in `stack.ts`. Put it
   back if you still run pipelines with it.
7. **Angular stays** in the internship and the Aug 2024 leadership entry, because
   both are factual. Next.js appears in Frameworks as the frontend you present now.
8. **Leadership section added** — both entries from the old PDF. Team lead and
   mentoring are mid-level differentiators and the portfolio has no leadership
   signal at all.
9. **The ticketing bullet now cites the real test result** (200 buyers, 10 sold,
   190 rejected) because it is measured, not asserted. See `docs/proof/`.

## Still unanswered

**What does the 15% measure?** CPU, query latency, throughput, render time? And
was it instrumented or estimated? It is the one number on the résumé with no
stated quantity, and it is the first thing an interviewer probes.
