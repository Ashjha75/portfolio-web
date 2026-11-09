// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://ashjha75.github.io/portfolio-web/",
  base: "/portfolio-web/",
  trailingSlash: "never",

  integrations: [
    // Tailwind v4 is wired in through the Vite plugin below, not an Astro
    // integration (@astrojs/tailwind is deprecated and caps out at Astro 5).
    icon({
      // This tells astro-icon to download the sets you need
      include: {
        lucide: ['*'], // Include all icons from the 'lucide' set
        'simple-icons': ['*'] // Include all icons from the 'simple-icons' set
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
