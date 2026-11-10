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

## Definition of done

- [ ] `npm run build` clean, `npm run check` 0 errors
- [ ] No template residue: no "AgenceX", "John Kat", Lorem Ipsum, `Ashish-*` class names
- [ ] Every nav link resolves to a real section id
- [ ] Palette holds: no hex outside the token table
- [ ] `prefers-reduced-motion: reduce` kills all motion
- [ ] Keyboard navigable; visible focus ring on every interactive element
- [ ] No horizontal scroll 320px → 1920px
- [ ] H1 is never `opacity: 0` on first paint
- [ ] Portrait served responsively, correct `alt`
- [ ] Mobile page height materially below v1's 10,647px
- [ ] Footer exists

## Known follow-ups (not Phase 1)

- Real project screenshots / demo GIFs — highest-value asset Ashish can add
- A proper headshot to replace the cropped mall photo
- The AI agent harness project, once he ships it
- Per-project detail pages (deeper case studies)
- `nvm use 26.13.0` from an admin shell so the Node version sticks
