import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: "https://ashjha75.github.io/portfolio-web/",
  base: "/portfolio-web/",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
