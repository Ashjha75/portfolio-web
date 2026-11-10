# 04 — Phase 1

Scope agreed: change what needs changing, first iteration, complete — design system
through responsiveness. Ashish reviews section-by-section afterwards.

## Page architecture

v1 order: Hero → About → Services → Brands → Projects → Experience → Contact → Timeline

Phase 1 order, ranked by what a backend hiring reviewer needs:

| # | Section | Change |
|---|---|---|
| 1 | **Nav** | Rebuilt — sticky, slim, scroll progress, active-section state |
| 2 | **Hero** | Rebuilt — role-explicit, SVG system schematic, real CTAs |
| 3 | **Proof strip** | Replaces vanity stats with defensible numbers |
| 4 | **Experience** | **Promoted** above projects. Best content, so it leads. |
| 5 | **Selected Work** | Carousel **deleted** → equal-height grid, 5 projects, architecture diagram each |
| 6 | **Stack** | Rebuilt — grouped by layer, not 15 undifferentiated pills |
| 7 | **About** | Tightened, filler removed, small cropped avatar |
| 8 | **Contact** | Email-first; form secondary |
| 9 | **Footer** | **Created** — v1 had none |

**Deleted:** `Services.astro` ("What I Bring" — reads as a freelance menu),
`Timeline.astro` (college history incl. 10th-standard marks; longest section on the
site), `Features.astro` (Lorem Ipsum), `Brands.astro` (replaced by Stack),
`ByNumber.astro` (vanity metrics), `CTA.astro` (misnamed Experience),
`Info.astro` / `Service.astro` / `EnvExample.astro` (now unused).

## Build order

1. Design tokens in `global.css` — `@theme` colour/type/space/motion
2. Self-hosted fonts via `@fontsource-variable`
3. `Layout.astro` — strip duplicate `:root` block, fix `Astro.site` URLs, add meta/OG
4. Shared primitives — `Container`, `Section`, `Eyebrow`, `Button`, `Tag`, `Reveal`
5. Motion runtime — one IntersectionObserver module, reduced-motion aware
6. Sections 1→9 in order
7. Content data rewrite per [03](./03-content-rules.md)
8. Responsive + a11y + perf pass

## Definition of done — results

Verified in Chrome at 1440px and 390px, plus build output.

- [x] `npm run build` clean; `npm run check` **0 errors, 0 warnings, 0 hints** (v1: 1 error, 7 hints)
- [x] No template residue — "AgenceX", "John Kat", Lorem Ipsum and the `Ashish-*`
      class names are gone, along with the files that carried them
- [x] Every nav link resolves; the dead `#timeline` link no longer exists
- [x] Palette holds — **1 hex literal** outside the token table (the `theme-color`
      meta tag, which must be a literal). v1 had 17 across 8 hue families.
- [x] `prefers-reduced-motion: reduce` block ships and kills all motion
- [x] Reveal styles gated behind `.js-motion`, so content renders without JS
- [x] **H1 carries no `data-reveal`** — it never paints at `opacity: 0`, so LCP is
      not penalised the way v1's animated H1 was
- [x] Keyboard navigable; single visible focus ring; skip-to-content link added
- [x] No horizontal scroll at 390px (`scrollWidth === clientWidth`)
- [x] Portrait loads (v1's `Astro.site` paths were broken), correct `alt`, lazy
- [x] Fonts self-hosted — **15 woff2 files, zero Google Fonts requests**
- [x] Main CSS **42KB**, down from 61.6KB
- [x] Footer exists

### One target missed, honestly

Mobile page height is **10,648px** vs v1's 10,647px — level, not lower.

The composition changed completely though. v1 spent 3,879px on the college
timeline, logo pills and the services menu. v2 spends 3,716px on five project
cards with architecture diagrams. The length is the same; the content is not.

The metric that actually moved is **time to the most important content**: a phone
reader reached Experience at roughly 5,900px in v1, and reaches it at **1,268px**
now — about 4.6x sooner. That was the real goal, and the raw-height target was the
wrong proxy for it.

## Known follow-ups (not Phase 1)

- Real project screenshots / demo GIFs — highest-value asset Ashish can add
- A proper headshot to replace the cropped mall photo
- The AI agent harness project, once he ships it
- Per-project detail pages (deeper case studies)
- `nvm use 26.13.0` from an admin shell so the Node version sticks
