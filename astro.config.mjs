// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ai-denser-ru.github.io',
  base: '/Agentic_CMS',
  vite: {
    plugins: [tailwindcss()]
  }
});