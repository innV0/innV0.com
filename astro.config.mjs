// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://innv0.com',
  integrations: [
    mdx(), 
    tailwind({
      applyBaseStyles: false, // We'll use our own base styles
    }), 
    sitemap()
  ],
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});