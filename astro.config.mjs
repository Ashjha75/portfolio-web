// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://ashjha75.github.io/portfolio-web/",
  base: "/portfolio-web/",
  trailingSlash: "never",

  integrations: [
    // Tailwind v4 is wired in through the Vite plugin below, not an Astro
    // integration (@astrojs/tailwind is deprecated and caps out at Astro 5).
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': ['*'],
      },
    }),
    sitemap({
      // trailingSlash is "never", so the ".../portfolio-web/" variant 404s.
      // Astro emits both by default; keep only the one that resolves.
      filter: (page) => !page.endsWith('/'),
    }),
  ],

  security: {
    // Astro hashes every inline script/style it emits and writes the policy
    // into a <meta http-equiv>. GitHub Pages cannot set response headers, so a
    // meta policy is the only option available to a static deploy.
    //
    // Deliberately omitted: frame-ancestors and X-Frame-Options, which browsers
    // ignore in <meta> and would only produce console warnings. Clickjacking
    // protection would need real headers (a CDN in front of Pages).
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        // the contact form posts to Formspree
        "connect-src 'self' https://formspree.io",
        "form-action 'self' https://formspree.io",
        "base-uri 'self'",
        "object-src 'none'",
        "frame-src 'none'",
        "worker-src 'self'",
        "manifest-src 'self'",
        "upgrade-insecure-requests",
      ],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
