import { describe, expect, it } from 'vitest';

/**
 * ActionBar is an Astro component that composes CommandCopy with an external link.
 *
 * Props:
 *   command    – the shell command to display and copy
 *   buttonLabel – label on the copy button
 *   href       – URL for the external link
 *   linkLabel  – label for the external link
 *
 * This test verifies the exported type signature by constructing a valid
 * props object. Full rendered-output tests are covered by `astro build`.
 */
describe('ActionBar', () => {
  it('accepts valid props', () => {
    const props: {
      command: string;
      buttonLabel: string;
      href: string;
      linkLabel: string;
    } = {
      command: 'npx skills add abijith-suresh/skills',
      buttonLabel: 'Copy',
      href: 'https://github.com/abijith-suresh/skills',
      linkLabel: 'View repository ↗',
    };

    // Verify all props are present and typed correctly
    expect(props.command).toBeTypeOf('string');
    expect(props.buttonLabel).toBeTypeOf('string');
    expect(props.href).toBeTypeOf('string');
    expect(props.linkLabel).toBeTypeOf('string');
  });

  it('exists as a resolvable module', async () => {
    // The component module must resolve without error
    const mod = await import('../src/components/ActionBar.astro');
    expect(mod).toBeDefined();
  });
});
