import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// AEO-first reference site. Static output, zero client framework.
// Nothing on this site may require JavaScript to become readable.
export default defineConfig({
  output: 'static',
  site: 'https://dragoncopilot.com.au',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});
