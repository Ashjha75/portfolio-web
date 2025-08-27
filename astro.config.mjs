import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  base: '/portfolio/', // your repo name
  adapter: staticAdapter(),
  vite: {
    plugins: [tailwindcss()],
  },
});