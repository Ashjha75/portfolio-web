# 02 — Design System: "Instrument"

## The idea

Backend work is invisible. Most backend portfolios fail because there is nothing
to photograph, so they fall back on generic SaaS decoration — which is exactly
what v1 did. The fix is not more decoration. It is **making the system visible**:
architecture, flow, concurrency, throughput, drawn honestly.

So the page should read like a well-made instrument panel. Dark, precise, calm,
warm-accented. Information-dense where it earns it, generous everywhere else.
Restraint plus hierarchy is what reads as senior — not more effects.

## Colour

Three hues total, down from eleven. One accent. One status signal. Everything
else is a neutral ramp.

The accent is a **warm copper-amber**, deliberately chosen *against* the
indigo/violet/cyan gradient that every AI-era template ships with. Warm accent on
cool-neutral graphite is a classic, hard-to-get-wrong combination, and it is rare
in developer portfolios — which is the whole point.

### Tokens

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0A0A0A` | Page background |
| `--surface-1` | `#111110` | Cards, panels |
| `--surface-2` | `#171716` | Raised / hover state |
| `--border` | `#262523` | Default hairline |
| `--border-strong` | `#35332F` | Emphasis, focus ring base |
| `--text` | `#EDEAE4` | Primary text (warm off-white, never `#fff`) |
| `--text-2` | `#A8A49C` | Secondary / body |
| `--text-3` | `#817D75` | Muted labels (holds 4.5:1) |
| `--accent` | `#E08C3C` | Links, CTAs, one highlight word, diagram flow |
| `--accent-hi` | `#F0A050` | Accent hover |
| `--accent-dim` | `#3A2616` | Accent tint fills |
| `--accent-fg` | `#0A0A0A` | Text on accent |
| `--signal` | `#5ECF8E` | **Status only** — "available", "passing", "live" |

Contrast: text 17:1, text-2 8:1, text-3 4.6:1, accent 8:1 on `--bg`. All pass AA.

### Rules

- Accent is for **interaction and one highlight** — never decoration.
- Green means status. It is never a second brand colour.
- No gradients except one: a single accent→transparent wash in the hero schematic.
- No purple, indigo, cyan, red, yellow, orange-red. If a colour isn't in the table,
  it doesn't ship.

## Type

| Role | Family | Notes |
|---|---|---|
| Display / headings | **Space Grotesk** | Technical character without being a novelty face. Not Inter, not Poppins. |
| Body / UI | **Inter** | Readable at small sizes. |
| Mono | **JetBrains Mono** | Labels, metrics, tech tags, diagram text, code. Carries the engineering signal. |

Self-hosted via `@fontsource-variable` — no third-party request, no render-block,
subset to latin. (v1 loaded Raleway from Google Fonts and used a display face for
body copy, which is part of why it felt template-y.)

Fluid scale, `clamp()`-based:

```
--fs-display  clamp(2.5rem, 1.6rem + 4vw, 4.75rem)   /* hero h1 */
--fs-h2       clamp(1.75rem, 1.25rem + 2vw, 2.6rem)
--fs-h3       1.3125rem
--fs-body     1rem / 1.7
--fs-sm       0.875rem
--fs-mono     0.75rem, uppercase, tracking 0.08em
```

## Space, radius, elevation

- 4px base unit. Section rhythm `clamp(5rem, 10vw, 8.5rem)`.
- Container max `1200px`, gutter `clamp(1.25rem, 5vw, 2.5rem)`.
- Radii: `6 / 10 / 14 / 20 / full`.
- **Elevation is surface + hairline, not shadow.** Shadows appear only on hover,
  and softly. v1's `shadow-lg` on every card is what makes cards look pasted on.

## Motion

Rules that keep it premium rather than laggy:

1. **Transform and opacity only.** Nothing that triggers layout.
2. **Content is visible by default.** Reveal styles apply only after JS adds
   `.js-motion` to `<html>`. If JS fails, everything still renders — and the H1
   never starts at `opacity: 0`, so LCP is not penalised (v1's was).
3. **Reveal once.** IntersectionObserver unobserves after firing. v1 re-hid
   sections on scroll-out, which caused the washed-out flicker.
4. **Stagger 60ms**, max 6 steps, then flush.
5. `prefers-reduced-motion: reduce` disables every transition, animation and
   stagger. Non-negotiable; v1 had none.

```
--dur-fast 150ms   --dur 280ms   --dur-slow 520ms
--ease cubic-bezier(0.16, 1, 0.3, 1)
```

## The hook

What makes someone remember this page, in priority order:

1. **Hero system schematic** — a hand-authored SVG request flow
   (Client → Gateway → Service → Cache / DB) with a slow accent pulse travelling
   the path. Says "I build systems" before a word is read. Pure SVG + CSS, no
   canvas, no library, reduced-motion aware.
2. **An architecture diagram on every project card** — the single biggest
   differentiator for a backend portfolio, and the reason project cards stop
   looking identical.
3. **Mono-labelled metrics drawn from real work**, not commit counts.
4. **A stack grouped by layer** with a line on what he actually does with each —
   instead of 15 undifferentiated logo pills where Kafka sits next to npm.
