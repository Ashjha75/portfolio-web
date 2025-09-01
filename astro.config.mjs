import { defineConfig } from 'astro/config';

// 1. Import the official integrations
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://ashjha75.github.io/portfolio-web/",
  base: "/portfolio-web/",
  trailingSlash: "never",
  
  // 2. Add the integrations to this array
  integrations: [
    tailwind(), 
    icon({
      // Optional: specify the icon packs to include
      include: {
        'simple-icons': ['*']
      }
    })
  ],

  // 3. You no longer need the manual vite config for Tailwind
});