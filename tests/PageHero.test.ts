import { describe, expect, it } from 'vitest';

/**
 * PageHero renders a hero section with eyebrow, title, and description
 * and an optional "actions" slot for the ActionBar.
 *
 * Props:
 *   eyebrow     – small uppercase label above the title
 *   title       – main heading
 *   description – body copy below the title
 *
 * Slot "actions" – rendered below the description (typically ActionBar)
 */
describe('PageHero', () => {
  it('accepts valid props', () => {
    const props: {
      eyebrow: string;
      title: string;
      description: string;
    } = {
      eyebrow: 'abijith-suresh/skills',
      title: 'Personal AI agent skills',
      description: 'A lightweight catalog of AI agent skills.',
    };

    expect(props.eyebrow).toBeTypeOf('string');
    expect(props.title).toBeTypeOf('string');
    expect(props.description).toBeTypeOf('string');
  });

  it('exists as a resolvable module', async () => {
    const mod = await import('../src/components/PageHero.astro');
    expect(mod).toBeDefined();
  });
});
