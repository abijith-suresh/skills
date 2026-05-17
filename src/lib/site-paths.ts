function ensureTrailingSlash(pathname: string): string {
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function buildCatalogPath(baseUrl: string): string {
  return ensureTrailingSlash(baseUrl);
}

export function buildSkillPath(baseUrl: string, slug: string): string {
  return `${ensureTrailingSlash(baseUrl)}${slug}/`;
}
