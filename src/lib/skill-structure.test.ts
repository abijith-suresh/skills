import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";
import { parse } from "yaml";
import { buildScopeInstallCommand, isValidScope } from "@/lib/skill-catalog";

const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const skillsRoot = join(repositoryRoot, "skills");

const skillNames = readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

function readFile(path: string): string {
  return readFileSync(path, "utf8");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseFrontmatter(source: string): Record<string, unknown> {
  const match = /^---\n([\s\S]*?)\n---\n/.exec(source);
  if (!match?.[1]) {
    throw new Error("SKILL.md is missing frontmatter");
  }

  const frontmatter: unknown = parse(match[1]);
  if (!isRecord(frontmatter)) {
    throw new Error("SKILL.md frontmatter must be a mapping");
  }
  return frontmatter;
}

function readSkill(directoryName: string): Record<string, unknown> {
  return parseFrontmatter(readFile(join(skillsRoot, directoryName, "SKILL.md")));
}

interface CatalogRow {
  name: string;
  say: string;
  scope: string;
  summary: string;
}

function parseCatalogRows(readme: string): CatalogRow[] {
  const rows: CatalogRow[] = [];
  for (const line of readme.split("\n")) {
    const match = /^\|\s*`([^`]+)`\s*\|\s*"([^"]*)"\s*\|\s*(.*?)\s*\|\s*(.*?)\s*\|\s*$/.exec(line);
    if (!match) continue;

    const name = match[1];
    const say = match[2];
    const scope = match[3];
    const summary = match[4];
    if (name === undefined || say === undefined || scope === undefined || summary === undefined)
      continue;

    rows.push({ name, say, scope, summary });
  }
  return rows;
}

describe("skill directories", () => {
  it.each(skillNames)("%s has no per-skill README or agents directory", (directoryName) => {
    const skillDirectory = join(skillsRoot, directoryName);
    expect(existsSync(join(skillDirectory, "README.md"))).toBe(false);
    expect(existsSync(join(skillDirectory, "agents"))).toBe(false);
  });
});

describe("skill frontmatter", () => {
  it("keeps the curated featured set", () => {
    const featured = skillNames.filter((directoryName) => {
      const metadata = readSkill(directoryName).metadata as Record<string, string>;
      return metadata.featured === "true";
    });

    expect(featured).toEqual(["commit", "grill-me"]);
  });

  it.each(skillNames)("%s has matching kebab-case name and valid scope", (name) => {
    const frontmatter = readSkill(name);
    expect(name).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    expect(frontmatter.name).toBe(name);
    expect(typeof frontmatter.description).toBe("string");
    const metadata = frontmatter.metadata as Record<string, string>;
    expect(isValidScope(metadata.scope)).toBe(true);
  });

  it("builds the personal and work installs from the collection scopes", () => {
    const skills = skillNames.map((slug) => ({
      slug,
      scope: (readSkill(slug).metadata as Record<string, string>).scope,
    }));
    const prefix = "npx skills@latest add abijith-suresh/skills --skill ";
    expect(buildScopeInstallCommand(skills, "personal")).toBe(
      `${prefix}commit grill-me handoff how-i-work implement pr prove-it triage unslop`
    );
    expect(buildScopeInstallCommand(skills, "work")).toBe(
      `${prefix}commit-work grill-me handoff implement mr prove-it triage unslop`
    );
    expect(() => buildScopeInstallCommand([], "work")).toThrow("No skills for scope: work");
  });
});

describe("README catalog", () => {
  const readme = readFile(join(repositoryRoot, "README.md"));
  const catalog = parseCatalogRows(readme);

  it("matches the README skill count to the directories", () => {
    expect(readme).toContain(`Skills-${skillNames.length}-green`);
  });

  it("uses the skill, say phrase, scope, and summary columns", () => {
    expect(readme).toContain("| Skill | Say | Scope | What it does |");
  });

  it("lists every skill exactly once", () => {
    expect(catalog.map((row) => row.name).sort()).toEqual(skillNames);
  });

  it.each(skillNames)("%s row matches its frontmatter", (directoryName) => {
    const frontmatter = readSkill(directoryName);
    const row = catalog.find((entry) => entry.name === directoryName);
    expect(row).toBeDefined();
    if (!row) {
      throw new Error(`README is missing a catalog row for ${directoryName}`);
    }

    expect(row.say.length).toBeGreaterThan(0);
    expect(row.scope).toBe((frontmatter.metadata as Record<string, string>).scope);
    expect(row.summary).toBe((frontmatter.metadata as Record<string, string>).summary);
  });
});
