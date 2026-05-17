import { describe, expect, it } from 'vitest';

import {
  buildInstallCommand,
  buildSkillSummaries,
  directorySlugFromEntry,
} from '../src/lib/skill-catalog';

describe('directorySlugFromEntry', () => {
  it('returns the parent directory name for a skill file path', () => {
    expect(directorySlugFromEntry('commit/SKILL.md')).toBe('commit');
  });
});

describe('buildInstallCommand', () => {
  it('builds a repo-scoped install command for one skill', () => {
    expect(buildInstallCommand('abijith-suresh/skills', 'commit')).toBe(
      'npx skills add abijith-suresh/skills --skill commit',
    );
  });

  it('builds an install command for the full collection', () => {
    expect(buildInstallCommand('abijith-suresh/skills')).toBe(
      'npx skills add abijith-suresh/skills',
    );
  });
});

describe('buildSkillSummaries', () => {
  it('sorts skills alphabetically by name and adds GitHub metadata', () => {
    const summaries = buildSkillSummaries([
      {
        id: 'review',
        data: {
          name: 'review',
          description: 'Review changes.',
        },
      },
      {
        id: 'commit',
        data: {
          name: 'commit',
          description: 'Create commits.',
        },
      },
    ]);

    expect(summaries).toEqual([
      {
        slug: 'commit',
        name: 'commit',
        description: 'Create commits.',
        installCommand: 'npx skills add abijith-suresh/skills --skill commit',
        sourceUrl: 'https://github.com/abijith-suresh/skills/tree/main/skills/commit',
      },
      {
        slug: 'review',
        name: 'review',
        description: 'Review changes.',
        installCommand: 'npx skills add abijith-suresh/skills --skill review',
        sourceUrl: 'https://github.com/abijith-suresh/skills/tree/main/skills/review',
      },
    ]);
  });
});
