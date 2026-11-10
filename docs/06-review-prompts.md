# 06 — Prompts for getting an honest review

Three prompts to paste into Claude, ChatGPT and Gemini. Copy the block inside
the fences — nothing else.

**Checked live on 2026-11-10**, so the prompts will work as written:
`/`, `/llms.txt`, `/profile.json`, `/og.png`, `/robots.txt`, `/sitemap-index.xml`
and `/resume.pdf` all return 200 from GitHub Pages, and the deployed page is v2
(no "AgenceX", no carousel, no "What I Bring"). Both
`https://ashjha75.github.io/portfolio-web` and the trailing-slash form resolve
on Pages, so either is safe to paste.

## Why they are written this way

Assistants default to flattery. Ask "what do you think of my portfolio?" and all
three will open with "This is a strong, well-designed portfolio!" and then give
you a checklist of alt text and meta descriptions. That tells you nothing.

So these prompts do four things deliberately:

1. **Ban the opening compliment** and force a verdict in the first line.
2. **Ban generic web-audit output** — Lighthouse scores, image compression,
   alt text — unless it genuinely changes a hiring decision.
3. **Require evidence.** Every criticism must quote the thing on the page that
   caused it. This is what stops invented feedback.
4. **Give the right bar.** Without context an assistant reviews against a
   staff-engineer portfolio and marks you down for the wrong reasons. The prompt
   states the experience level and target role up front.

Run the same prompt on all three, then compare. **Findings that all three
independently raise are real.** Anything only one raises is probably noise —
check it against the page yourself before acting.

One caution: a model told to be harsh will sometimes over-correct and invent
flaws to look rigorous. If a criticism cites something that is not actually on
the page, discard it. That is why every prompt demands a quote.

---

## Prompt 1 — The hiring review (the main one)

```
You are reviewing a portfolio site as part of a real hiring decision. Open and
read the whole page before answering: https://ashjha75.github.io/portfolio-web

Context you need, so you judge against the right bar:
- Candidate: Ashish Kumar Jha, ~2 years professional experience, currently a
  Software Engineer at Novoinvent Software, based in India.
- Target roles: backend engineering — Java / Spring Boot — at mid level (2-4 YOE).
- This page is his primary application asset alongside a CV.

Review it in two passes.

PASS 1 — You are a senior backend engineer on the hiring panel. Someone forwarded
you the link with "worth a phone screen?" You form an impression in 90 seconds,
then spend ten minutes digging.

PASS 2 — You are the technical recruiter screening forty candidates today. You
do not read code. You care about clarity, credibility and whether this person is
easy to put in front of a hiring manager.

Rules:
- No opening compliment. First line is the verdict.
- Do not give me a generic web audit. No Lighthouse scores, image compression,
  alt text or meta tags unless that specific item changes the hiring decision.
- Every criticism must quote or name the exact thing on the page that triggered
  it. If you cannot point at it, do not raise it.
- Do not invent flaws to seem thorough. "This part is fine" is an acceptable
  answer.
- Where something is genuinely good, one line is enough. Do not pad.
- I can take blunt feedback. Softening it wastes my time.

Answer in this order:

1. VERDICT — advance to a phone screen, or pass? One word, then two sentences.
2. THE 90-SECOND READ — what did you conclude before reading carefully, and from
   exactly what on the page?
3. BIGGEST BLOCKER — the single strongest reason you would not advance him.
4. CREDIBILITY — is anything inflated, vague, templated or unverifiable? Quote it.
   Would any claim fall apart if you opened the linked GitHub repos?
5. DEPTH — does the technical content show real engineering judgement, or just
   vocabulary? Take the strongest technical claim on the page and say whether you
   believe it and why.
6. GAPS — what did you expect to see for a 2-4 YOE backend candidate that is not
   there?
7. SCORE — rate it 1-10 against the bar for mid-level backend hires. First define
   what a 10 looks like, so the number means something.
8. TOP 3 FIXES — ranked by impact. For each: what to change, why it moves the
   hiring needle, and roughly how long it should take.

Finish with this: if you were comparing him against five candidates with nearly
identical CVs, what on this page — if anything — would make you remember him?
If the honest answer is "nothing", say that.
```

---

## Prompt 2 — Can an AI actually read it?

This checks whether the machine-readable layer works. Someone pasting your link
into an assistant should get an accurate answer without you explaining anything.

```
Open https://ashjha75.github.io/portfolio-web and answer only from what you can
read there. Do not guess, and do not use anything you may already know.

1. Who is this person and what do they do?
2. What are they strongest at, specifically?
3. What have they built? List each project with its stack in one line.
4. How much experience do they have, and where?
5. How would I contact them, and are they open to work?
6. Would you describe them as a frontend, backend or full-stack engineer? Say
   what on the page made you decide.

Then, separately:
- What could you NOT determine from the page?
- Where did you have to infer something rather than read it directly?
- Did you find any machine-readable files (for example llms.txt or a JSON-LD
  profile)? Did they help, and did anything in them contradict the page?
```

**What a good result looks like:** it says backend, names Java and Spring Boot
first, lists all five projects, finds the Gmail address, and knows he is open to
roles. If it calls him a frontend developer, or misses projects, or cannot find
contact details, the page is not communicating clearly enough.

---

## Prompt 3 — The interview stress test

The most useful of the three. It tells you which claims you will have to defend.

```
Read https://ashjha75.github.io/portfolio-web

You are going to technically interview this candidate, and the portfolio is all
you have. He is applying for a mid-level backend role (Java / Spring Boot).

1. Write the 8 questions you would ask to find out whether the claims on this
   page are real rather than rehearsed. Target the specific things he says he
   built — multi-tenancy with schema isolation, compare-and-set state
   transitions, concurrency control that prevents overselling.
2. For each question, say in one line what a weak answer would sound like versus
   a strong one.
3. Predict which question he is most likely to struggle with, and why you think
   that from the page.
4. Is there anything on this page you suspect he could not explain in depth?
   Point at it.
```

---

## How to use the results

1. Run **Prompt 1** on Claude, ChatGPT and Gemini. Put the three answers side by
   side.
2. Anything **all three** raise is real — fix it.
3. Anything **one** raises: check the page yourself. If the quoted text is not
   there, the model invented it. Discard.
4. Run **Prompt 2** last, after any fixes, as a regression check.
5. Bring **Prompt 3**'s questions to me and we can work through the ones you are
   not confident answering.

Expect the scores to differ by a point or two between models — that spread is
normal and not worth chasing. The ranked fix list is the part worth acting on.
