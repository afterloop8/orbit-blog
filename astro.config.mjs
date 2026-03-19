// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://afterloop.github.io',
  base: '/orbit-blog/',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
