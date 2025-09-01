// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://ashjha75.github.io/portfolio-web/",
  base: "/portfolio-web/",
  trailingSlash: "never",
  
  integrations: [
    tailwind(), 
    
    // Add the `include` option here
    icon({
      // This tells astro-icon to download the sets you need
      include: {
        lucide: ['*'], // Include all icons from the 'lucide' set
        'simple-icons': ['*'] // Include all icons from the 'simple-icons' set
      }
    })
  ],
});