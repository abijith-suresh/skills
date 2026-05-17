import { describe, expect, it } from 'vitest';

import {
  buildInstallCommand,
  buildSkillSummaries,
  directorySlugFromEntry,
  parseReadmeBody,
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

describe('parseReadmeBody', () => {
  it('extracts the h1 and first paragraph from a README', () => {
    const body = `# commit

Inspect the diff, split by intent, and create clean conventional commits.
Requires ticket scope for GitLab/work repos.

## Install

\`\`\`bash
npx skills add abijith-suresh/skills --skill commit
\`\`\`
`;

    expect(parseReadmeBody(body)).toEqual({
      name: 'commit',
      description:
        'Inspect the diff, split by intent, and create clean conventional commits. Requires ticket scope for GitLab/work repos.',
    });
  });

  it('returns empty strings when body is empty', () => {
    expect(parseReadmeBody('')).toEqual({ name: '', description: '' });
  });

  it('stops description collection at the next heading', () => {
    const body = `# review

Review code changes.

## Usage

Do the thing.
`;

    expect(parseReadmeBody(body)).toEqual({
      name: 'review',
      description: 'Review code changes.',
    });
  });
});
