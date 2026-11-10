# 01 — Audit of v1

Audited 2026-11-10 in Chrome at 1440px and 390px, plus a full code read.

## Verdict

v1 would work *against* Ashish in a senior review. Not because of taste — because
of shipped template residue that takes under a minute to find.

## A. Credibility defects (the urgent class)

| Defect | Location |
|---|---|
| `title="Welcome to AgenceX"` — the template's agency name | `index.astro:15` |
| **"John Kat"** — a fake person's name | `Footer.astro` |
| Entire Lorem Ipsum page: *"Important Features for Digital Marketing"*, *"Free optimazation."* | `Features.astro` (unused but committed) |
| `id="Ashish"`, `.Ashish-event`, `.Ashish-dot`, `#Ashish-path` — "Timeline" find-replaced with his name | `Timeline.astro` |
| Nav "Timeline" → `#timeline`, but the section id is `Ashish`. **Dead link.** | `Navbar.astro:12` |
| Component named `CTA.astro` that renders "My Experience" | `CTA.astro` |
| Casual mall photo (shopfronts, "NEW DAY" banner) as the only portrait; `alt="Hero image"`; 2350×2359 / 266KB served at ~400px | `AboutUs.astro:18` |
| Vanity stats: "1,500+ Code Commits", "500+ Code Reviews", "200+ Features Delivered" against "2+ Years" | `ByNumber.astro` |
| Timeline runs back to 10th standard (88%) and 12th (82.8%) | `Ashish.ts` |

## B. Why it reads "AI-made"

Three measured causes:

1. **No colour system.** 17 hardcoded hex values across 8 Tailwind families
   (gray, green, blue, red, yellow, orange, slate, indigo) plus `#a855f7`,
   `#06b6d4`, `#f59e0b`. `rgba(99,102,241)` is hardcoded 5× and does not match
   the declared primary `#1d4ed8`. Every section invented its own accent.
2. **Decoration carrying no information** — blurred blobs, 5 floating particles,
   and a logo that retitles itself "Engineer → Developer → Ashish" every 2s forever.
3. **Uniform emphasis.** The Experience section (the best content) has the same
   visual weight as the npm logo.

## C. Structural failures

- **Projects carousel is broken, not just ugly.** Coverflow rotates side cards in
  3D so their text runs diagonally; card heights range **628px → 1173px**, so the
  carousel sizes to the tallest and leaves a large void; side cards clip
  mid-sentence; autoplay advances every **3.5s**; every project shows the same
  generic folder icon — **zero screenshots or diagrams**.
- **Section order**: Timeline renders *after* Contact — content past the
  conversion point.
- **No footer at all** — commented out at `Layout.astro:29`. Page just stops.
- **Header is `absolute`** — no sticky nav, no active-section state.
- **Contact is form-first**; email/GitHub/LinkedIn exist but sit below the form.

## D. Mobile (390px)

No horizontal overflow and the hamburger works — fundamentals are fine. The
problem is proportion. Page is **10,647px ≈ 12.6 phone screens**, and the ranking
is inverted:

```
Timeline (college)  1880px   ← longest section on the site
Experience          1702px
Projects            1546px
Services            1077px
Contact             1002px
Tech stack           922px   ← a full screen of logo pills
```

The timeline's connecting line **disappears entirely below 768px** — its SVG path
is positioned from JS measurements that break at mobile widths.

## E. Code-level bugs found

- `@keyframes particle-float` declares `100%` twice → animation broken (`Hero.astro`)
- Service cards use `group-hover:` with **no `group` class on the parent** → the
  hover effect never fires; icons are permanently grayscale (`Service.astro`)
- `md:sapce-y-12` typo → class does nothing (`Services.astro`)
- `bg-body` is undefined in the theme — dead class, used in `Layout` and `Navbar`
- `Astro.site` renders `…/portfolio-web//favicon.svg`, `//resume.pdf`,
  `//images/…` (double slash) and **loads from the live site during local dev**
- `.scroll-animation` sets `opacity: 0` and re-hides on scroll-out → flicker, and
  the H1 (the LCP element) starts invisible
- **No `prefers-reduced-motion` handling anywhere**
- Brands section runs an IntersectionObserver whose `is-visible` class nothing uses

## What survives into v2

Genuinely good and worth keeping: the Experience content (real role, real company,
real metrics — 15% perf, 20% response time), the project substance (concurrency
patterns, multi-tenancy, schema isolation), and the dark-mode direction.
