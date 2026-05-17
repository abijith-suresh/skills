import { describe, expect, it } from 'vitest';

import { buildCatalogPath, buildSkillPath } from '../src/lib/site-paths';

describe('buildCatalogPath', () => {
  it('normalizes the Astro base path for the landing page', () => {
    expect(buildCatalogPath('/skills')).toBe('/skills/');
  });
});

describe('buildSkillPath', () => {
  it('builds a skill detail path under the configured base path', () => {
    expect(buildSkillPath('/skills/', 'commit')).toBe('/skills/commit/');
  });
});
