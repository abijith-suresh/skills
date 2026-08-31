import { SITE } from "./site-metadata";
import { normalizePagePath } from "./site-paths";

export interface OgRoute {
  slug: string;
  title: string;
  description: string;
  label: "catalog" | "skill";
}

type SkillDefinition = {
  id: string;
  data: {
    name: string;
    description: string;
  };
};

export function getOgImagePath(pathname: string): string {
  const normalizedPath = normalizePagePath(pathname);
  if (normalizedPath === "/" || normalizedPath === "/404/") return "/og/index.png";

  const slug = normalizedPath.replace(/^\/|\/$/g, "");
  return `/og/${slug}.png`;
}

export function buildOgRoutes(definitions: SkillDefinition[]): OgRoute[] {
  return [
    {
      slug: "index",
      title: SITE.title,
      description: SITE.description,
      label: "catalog",
    },
    ...definitions.map((definition) => ({
      slug: definition.id,
      title: definition.data.name,
      description: definition.data.description,
      label: "skill" as const,
    })),
  ];
}
