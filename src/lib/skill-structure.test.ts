import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";
import { parse } from "yaml";

const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const skillsRoot = join(repositoryRoot, "skills");

const skillNames = readdirSync(skillsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const agentInvoked = new Set(["mr", "pr"]);

const sayOverrides = new Map([["commit-work", "commit or commit work"]]);

function expectedSay(directoryName: string): string {
  return sayOverrides.get(directoryName) ?? directoryName.replaceAll("-", " ");
}

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
  summary: string;
}

function parseCatalogRows(readme: string): CatalogRow[] {
  const rows: CatalogRow[] = [];
  for (const line of readme.split("\n")) {
    const match = /^\|\s*`([^`]+)`\s*\|\s*"([^"]*)"\s*\|\s*(.*?)\s*\|\s*$/.exec(line);
    if (!match) continue;

    const name = match[1];
    const say = match[2];
    const summary = match[3];
    if (name === undefined || say === undefined || summary === undefined) continue;

    rows.push({ name, say, summary });
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

    expect(featured).toEqual(["commit", "grill-me", "research"]);
  });

  it("pins the shared commit-work trigger", () => {
    expect(readSkill("commit-work").description).toBe(
      'Use when the user says "commit" or "commit work".'
    );
  });
});

describe("README catalog", () => {
  const readme = readFile(join(repositoryRoot, "README.md"));
  const catalog = parseCatalogRows(readme);

  it("matches the README skill count to the directories", () => {
    expect(readme).toContain(`Skills-${skillNames.length}-green`);
  });

  it("uses the skill, say phrase, and summary columns", () => {
    expect(readme).toContain("| Skill | Say | What it does |");
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

    expect(row.say).toBe(agentInvoked.has(directoryName) ? "agent" : expectedSay(directoryName));
    expect(row.summary).toBe((frontmatter.metadata as Record<string, string>).summary);
  });
});
