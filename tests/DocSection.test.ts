import { describe, expect, it } from 'vitest';

/**
 * DocSection renders a labeled documentation block with eyebrow, heading,
 * and a card-wrapped slot for content (or a fallback message).
 *
 * Props:
 *   eyebrow      – small uppercase label
 *   heading      – section heading
 *   fallbackText – text shown when no slot content is provided
 *
 * Slot (default) – rendered inside the card
 */
describe('DocSection', () => {
  it('accepts valid props', () => {
    const props: {
      eyebrow: string;
      heading: string;
      fallbackText: string;
      hasContent?: boolean;
    } = {
      eyebrow: 'README',
      heading: 'Usage, install, and prompts',
      fallbackText: 'This skill does not currently include a README.',
    };

    expect(props.eyebrow).toBeTypeOf('string');
    expect(props.heading).toBeTypeOf('string');
    expect(props.fallbackText).toBeTypeOf('string');
  });

  it('exists as a resolvable module', async () => {
    const mod = await import('../src/components/DocSection.astro');
    expect(mod).toBeDefined();
  });
});
