import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({

  base: '/portfolio-web/', // your repo name
  vite: {
    plugins: [tailwindcss()],
  },
});