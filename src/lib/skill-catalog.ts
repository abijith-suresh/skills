export const SKILLS_REPOSITORY = "abijith-suresh/skills";

export interface SkillSummary {
  slug: string;
  name: string;
  summary: string;
  scope: string;
  installCommand: string;
  sourceUrl: string;
  featured: boolean;
}

export function directorySlugFromEntry(entry: string): string {
  return entry.split("/")[0] ?? entry;
}

export type SkillScope = "personal" | "work";

export function isValidScope(scope: string | undefined): scope is string {
  if (!scope) return false;
  const tags = scope.split(" ");
  return (
    tags.every((tag) => tag === "personal" || tag === "work") && new Set(tags).size === tags.length
  );
}

export function buildInstallCommand(repository: string, skills: string | string[] = []): string {
  const slugs = typeof skills === "string" ? [skills] : skills;
  const selection = slugs.length ? ` --skill ${slugs.join(" ")}` : "";
  return `npx skills@latest add ${repository}${selection}`;
}

export function buildScopeInstallCommand(
  skills: Pick<SkillSummary, "slug" | "scope">[],
  scope: SkillScope,
  repository = SKILLS_REPOSITORY
): string {
  const slugs = skills
    .filter((skill) => skill.scope.split(" ").includes(scope))
    .map((skill) => skill.slug)
    .sort();
  if (!slugs.length) throw new Error(`No skills for scope: ${scope}`);
  return buildInstallCommand(repository, slugs);
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

export function getSkillSummary(data: { metadata: Record<string, string> }): string {
  const summary = data.metadata.summary;
  if (!summary) {
    throw new Error("Skill metadata.summary is required");
  }
  return summary;
}

export function buildSkillSummaries(
  definitions: {
    id: string;
    data: { name: string; description: string; metadata: Record<string, string> };
  }[],
  repository = SKILLS_REPOSITORY
) {
  return definitions
    .map((definition) => ({
      slug: definition.id,
      name: definition.data.name,
      summary: getSkillSummary(definition.data),
      scope: definition.data.metadata.scope,
      installCommand: buildInstallCommand(repository, definition.id),
      sourceUrl: buildSkillSourceUrl(repository, definition.id),
      featured: isFeaturedMetadata(definition.data.metadata?.featured),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}
