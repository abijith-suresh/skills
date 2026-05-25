import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  site: 'https://abijith-suresh.github.io',
  base: '/skills',
  integrations: [
    expressiveCode({
      themes: ['github-dark-dimmed'],
      defaultProps: {
        showLineNumbers: false,
        showCopyButton: false,
      },
      styleOverrides: {
        borderRadius: '0',
        borderColor: '#2a2a2a',
        codeFontFamily:
          'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
        codeFontSize: '0.875rem',
        codeLineHeight: '1.6',
        codeBackground: '#111111',
        codeForeground: '#f4f4f4',
        frames: {
          frameBoxShadowCssValue: 'none',
          editorBackground: '#111111',
          terminalBackground: '#111111',
          terminalTitlebarBackground: '#111111',
          terminalTitlebarBorderBottomColor: '#2a2a2a',
          terminalTitlebarDotsOpacity: '0.15',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
