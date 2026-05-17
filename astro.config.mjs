import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abijith-suresh.github.io',
  base: '/skills',
  vite: {
    plugins: [tailwindcss()],
  },
});
