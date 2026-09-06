export const SKILLS_REPOSITORY = "abijith-suresh/skills";

export interface SkillSummary {
  slug: string;
  name: string;
  description: string;
  installCommand: string;
  sourceUrl: string;
  featured: boolean;
}

export function directorySlugFromEntry(entry: string): string {
  return entry.split("/")[0] ?? entry;
}

export function buildInstallCommand(repository: string, skillSlug?: string): string {
  if (!skillSlug) {
    return `npx skills@latest add ${repository}`;
  }

  return `npx skills@latest add ${repository} --skill ${skillSlug}`;
}

export function buildRepositoryUrl(repository = SKILLS_REPOSITORY) {
  return `https://github.com/${repository}`;
}

export function buildSkillSourceUrl(repository: string, slug: string) {
  return `${buildRepositoryUrl(repository)}/tree/main/skills/${slug}`;
}

export function isFeaturedMetadata(featured: string | undefined): boolean {
  return featured === "true";
}

export function buildSkillSummaries(
  definitions: {
    id: string;
    data: { name: string; description: string; metadata?: Record<string, string> };
  }[],
  repository = SKILLS_REPOSITORY
) {
  return definitions
    .map((definition) => ({
      slug: definition.id,
      name: definition.data.name,
      description: definition.data.description,
      installCommand: buildInstallCommand(repository, definition.id),
      sourceUrl: buildSkillSourceUrl(repository, definition.id),
      featured: isFeaturedMetadata(definition.data.metadata?.featured),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}
