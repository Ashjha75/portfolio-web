// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  base: '/portfolio/', // Set base for GitHub Pages deployment
  vite: {
    plugins: [tailwindcss()],
  },
});
