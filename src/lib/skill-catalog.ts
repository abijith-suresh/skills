export const SKILLS_REPOSITORY = 'abijith-suresh/skills';

export interface SkillDefinitionLike {
  id: string;
  data: {
    name: string;
    description: string;
  };
}

export interface SkillSummary {
  slug: string;
  name: string;
  description: string;
  installCommand: string;
  sourceUrl: string;
}

export function directorySlugFromEntry(entry: string): string {
  return entry.split('/')[0] ?? entry;
}

export function buildInstallCommand(repository: string, skillSlug?: string): string {
  if (!skillSlug) {
    return `npx skills add ${repository}`;
  }

  return `npx skills add ${repository} --skill ${skillSlug}`;
}

export function buildSkillSummaries(
  definitions: SkillDefinitionLike[],
  repository = SKILLS_REPOSITORY,
): SkillSummary[] {
  return definitions
    .map((definition) => ({
      slug: definition.id,
      name: definition.data.name,
      description: definition.data.description,
      installCommand: buildInstallCommand(repository, definition.id),
      sourceUrl: `https://github.com/${repository}/tree/main/skills/${definition.id}`,
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

export function findSkillSummary(
  summaries: SkillSummary[],
  slug: string,
): SkillSummary | undefined {
  return summaries.find((summary) => summary.slug === slug);
}

export function parseReadmeBody(body: string): {
  name: string;
  description: string;
} {
  const lines = body.split('\n');
  let name = '';
  const descParts: string[] = [];
  let afterH1 = false;

  for (const line of lines) {
    if (line.startsWith('# ')) {
      name = line.replace(/^# /, '').trim();
      afterH1 = true;
      continue;
    }
    if (afterH1) {
      if (line.startsWith('## ') || line.trim() === '') {
        if (descParts.length > 0) break;
        continue;
      }
      descParts.push(line.trim());
    }
  }

  return { name, description: descParts.join(' ') };
}
