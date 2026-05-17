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
