import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';

// Colors synced with src/styles/global.css @theme inline
const COLORS = {
  base: '#111111',
  text: '#f4f4f4',
  border: '#2a2a2a',
};

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
        borderColor: COLORS.border,
        codeFontFamily:
          '"Geist Mono", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
        codeFontSize: '0.875rem',
        codeLineHeight: '1.625',
        codeBackground: COLORS.base,
        codeForeground: COLORS.text,
        frames: {
          frameBoxShadowCssValue: 'none',
          editorBackground: COLORS.base,
          terminalBackground: COLORS.base,
          terminalTitlebarBackground: COLORS.base,
          terminalTitlebarBorderBottomColor: COLORS.border,
          terminalTitlebarDotsOpacity: '0.15',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
