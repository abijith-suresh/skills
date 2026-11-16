import { describe, expect, it } from "vitest";
import {
  buildInstallCommand,
  buildSkillSummaries,
  getSkillSummary,
  isValidScope,
} from "@/lib/skill-catalog";

describe("buildSkillSummaries", () => {
  it("sorts skills by display name and builds install/source metadata", () => {
    const summaries = buildSkillSummaries(
      [
        {
          id: "handoff",
          data: {
            name: "Handoff",
            description: 'Use when the user says "handoff".',
            metadata: { scope: "personal work", summary: "Handoff context." },
          },
        },
        {
          id: "commit",
          data: {
            name: "Commit",
            description: 'Use when the user says "commit".',
            metadata: { scope: "personal", summary: "Commit changes." },
          },
        },
      ],
      "owner/repo"
    );

    expect(summaries).toEqual([
      {
        slug: "commit",
        name: "Commit",
        summary: "Commit changes.",
        scope: "personal",
        installCommand: "npx skills@latest add owner/repo --skill commit",
        sourceUrl: "https://github.com/owner/repo/tree/main/skills/commit",
        featured: false,
      },
      {
        slug: "handoff",
        name: "Handoff",
        summary: "Handoff context.",
        scope: "personal work",
        installCommand: "npx skills@latest add owner/repo --skill handoff",
        sourceUrl: "https://github.com/owner/repo/tree/main/skills/handoff",
        featured: false,
      },
    ]);
  });

  it("reads the featured flag from the spec metadata map", () => {
    const summaries = buildSkillSummaries([
      {
        id: "commit",
        data: {
          name: "Commit",
          description: 'Use when the user says "commit".',
          metadata: { scope: "personal", summary: "Commit changes.", featured: "true" },
        },
      },
      {
        id: "handoff",
        data: {
          name: "Handoff",
          description: 'Use when the user says "handoff".',
          metadata: { scope: "personal work", summary: "Handoff context.", featured: "false" },
        },
      },
    ]);

    expect(summaries.map((summary) => [summary.slug, summary.featured])).toEqual([
      ["commit", true],
      ["handoff", false],
    ]);
  });
});

describe("getSkillSummary", () => {
  it("rejects metadata without a summary", () => {
    expect(() => getSkillSummary({ metadata: { featured: "true" } })).toThrow(
      "Skill metadata.summary is required"
    );
  });
});

describe("scope validation", () => {
  it.each(["personal", "work", "personal work", "work personal"])("accepts %s", (scope) => {
    expect(isValidScope(scope)).toBe(true);
  });

  it.each([
    undefined,
    "",
    "common",
    "personal common",
    "personal personal",
    "personal  work",
    " personal",
    "work ",
  ])("rejects %s", (scope) => {
    expect(isValidScope(scope)).toBe(false);
  });
});

describe("buildInstallCommand", () => {
  it("uses one variadic skill flag for multiple skills", () => {
    expect(buildInstallCommand("owner/repo", ["commit", "pr"])).toBe(
      "npx skills@latest add owner/repo --skill commit pr"
    );
  });
});
