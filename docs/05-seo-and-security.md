# 05 — SEO, AI discoverability, and security

Three goals: rank, be *citable by assistants*, and be safe to host. On a static
GitHub Pages site the third one has hard limits — stated plainly below.

## SEO

| Added | Where |
|---|---|
| `sitemap-index.xml` + `sitemap-0.xml` | `@astrojs/sitemap` |
| `robots.txt` | `public/robots.txt` |
| Canonical URL | `Layout.astro` |
| Open Graph (`og:type=profile`, image, dimensions, alt, locale) | `Layout.astro` |
| Twitter summary_large_image + creator | `Layout.astro` |
| `robots` meta with `max-image-preview:large`, `max-snippet:-1` | `Layout.astro` |
| `author`, `color-scheme`, `theme-color` | `Layout.astro` |
| `rel="me"` links (GitHub, X) for identity verification | `Layout.astro` |
| Social card image, 1200×630 | `public/og.png` |

**Sitemap gotcha, fixed.** `trailingSlash: "never"` means `…/portfolio-web/`
404s, but the sitemap integration emitted both that and the working URL. A
`filter` now drops any entry ending in `/`, so the sitemap lists exactly one
resolving URL.

**The OG card** is hand-built, not generated art: `scripts/make-og.mjs` writes an
SVG and renders it with sharp. Regenerate with `npm run og` after changing the
headline or the proof numbers.

## AI discoverability

The ask was: *someone hands my link to an AI, and it can pull my details out
easily.* Three layers, because different agents reach for different things.

1. **`/llms.txt`** — a plain-text brief following the llmstxt.org convention,
   at `src/pages/llms.txt.ts`. **Generated from the same data the page renders**
   (`profile.ts`, `experience.ts`, `projects.ts`, `stack.ts`), so it cannot drift
   from what a human sees. Includes identity, figures, experience, every project
   with stack and repo, the stack by layer, education, and a short
   "Notes for assistants" section that heads off the likely misreadings —
   that Angular is historical, that the agent harness is in progress, and that
   proficiency is intermediate.

2. **`/profile.json`** — the full schema.org `@graph` as a standalone fetchable
   document (`src/pages/profile.json.ts`).

3. **In-page JSON-LD** — the same graph, embedded in `<head>`: `Person`
   (with `worksFor`, `alumniOf`, `knowsAbout`, `sameAs`, `hasOccupation`,
   `seeks`), `WebSite`, `ProfilePage`, and one `SoftwareSourceCode` node per
   project. Eight nodes total.

Both companions are advertised with `<link rel="alternate">` so an agent can
find them from the page rather than guessing paths.

`robots.txt` explicitly **allows** GPTBot, OAI-SearchBot, ChatGPT-User,
ClaudeBot, Claude-User, Claude-SearchBot, PerplexityBot, Google-Extended,
Applebot-Extended, Amazonbot, Meta-ExternalAgent, cohere-ai and CCBot. Being
read and cited is the goal here, not something to defend against.

## Security

**Content-Security-Policy** via Astro's built-in `security.csp`. Astro hashes
every inline script it emits (8 SHA-256 hashes currently) and writes the policy
into a `<meta http-equiv>`:

```
default-src 'self'; img-src 'self' data:; font-src 'self';
connect-src 'self' https://formspree.io; form-action 'self' https://formspree.io;
base-uri 'self'; object-src 'none'; frame-src 'none'; worker-src 'self';
manifest-src 'self'; upgrade-insecure-requests;
script-src 'self' <8 hashes>; style-src 'self'
```

No `unsafe-inline` anywhere. To get there, the hero's `style="--enter-delay:…"`
attributes became `.enter-d1`–`.enter-d6` classes, since **style attributes
cannot be hashed**. Verified in a real browser: the page is fully interactive
under the policy with zero console violations.

Other measures:

- Every external link carries `rel="noopener noreferrer"`.
- `referrer` policy: `strict-origin-when-cross-origin`.
- Fonts are self-hosted — no third-party origin to trust at runtime.
- `npm audit`: **0 vulnerabilities**.
- No secrets in the bundle; the Formspree endpoint is a public form URL by design,
  and the form keeps its `_gotcha` honeypot.
- Removed `public/logos/{paypal,slack,spotify}` — unreferenced template leftovers
  that read as fabricated client logos. Recoverable from git history.

### What a static GitHub Pages deploy cannot do

Be honest about this rather than implying more protection than exists:

- **No response headers.** Pages serves static files with fixed headers, so
  `Strict-Transport-Security`, `X-Content-Type-Options`, `Permissions-Policy`
  and a header-delivered CSP are all unavailable.
- **No clickjacking protection.** `frame-ancestors` and `X-Frame-Options` are
  *ignored* when delivered in a `<meta>` tag, so they are deliberately omitted
  rather than included for show. Fixing this needs a real header, which means
  putting a CDN (Cloudflare, Netlify) in front of the site.
- **`robots.txt` and `/.well-known/security.txt` only count at the domain root.**
  This is a project page at `ashjha75.github.io/portfolio-web`, so the live
  robots.txt a crawler reads is `ashjha75.github.io/robots.txt` — which lives in
  the `Ashjha75.github.io` user-pages repo, not this one. The copies here take
  effect only on a custom domain.

### Follow-ups

- Submit `https://ashjha75.github.io/portfolio-web/sitemap-index.xml` to Google
  Search Console and Bing Webmaster Tools.
- Put a copy of `robots.txt` (with the Sitemap line) in the `Ashjha75.github.io`
  repo so it is served at the domain root.
- A custom domain behind a CDN would unlock real security headers.
