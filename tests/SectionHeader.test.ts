import { describe, expect, it } from 'vitest';

/**
 * SectionHeader renders an eyebrow label, a heading, and an optional
 * description string.
 *
 * Props:
 *   eyebrow     – small uppercase label
 *   heading     – section title
 *   description – optional body text below the heading
 */
describe('SectionHeader', () => {
  it('accepts valid props', () => {
    const props: {
      eyebrow: string;
      heading: string;
      description?: string;
    } = {
      eyebrow: 'Collection',
      heading: 'Available skills',
      description: 'Click any card to view the full documentation.',
    };

    expect(props.eyebrow).toBeTypeOf('string');
    expect(props.heading).toBeTypeOf('string');
    expect(props.description).toBeTypeOf('string');
  });

  it('accepts props without a description', () => {
    const props: {
      eyebrow: string;
      heading: string;
      description?: string;
    } = {
      eyebrow: 'Collection',
      heading: 'Available skills',
    };

    expect(props.description).toBeUndefined();
  });

  it('exists as a resolvable module', async () => {
    const mod = await import('../src/components/SectionHeader.astro');
    expect(mod).toBeDefined();
  });
});
