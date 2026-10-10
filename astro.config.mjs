// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served as a GitHub Pages project site under the user's custom domain:
// https://shubhamtatvamasi.com/LinkedIn-Formatter/
export default defineConfig({
  site: 'https://shubhamtatvamasi.com',
  base: '/LinkedIn-Formatter',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
