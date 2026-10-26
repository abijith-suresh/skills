import { describe, expect, it } from "vitest";
import {
  buildInstallCommand,
  buildRepositoryUrl,
  buildSkillSourceUrl,
  buildSkillSummaries,
  directorySlugFromEntry,
  getSkillSummary,
  isFeaturedMetadata,
} from "@/lib/skill-catalog";

describe("directorySlugFromEntry", () => {
  it("uses the first path segment as the skill slug", () => {
    expect(directorySlugFromEntry("commit/SKILL.md")).toBe("commit");
  });

  it("falls back to the entry when no path separator is present", () => {
    expect(directorySlugFromEntry("SKILL.md")).toBe("SKILL.md");
  });
});

describe("buildRepositoryUrl", () => {
  it("builds the repository source URL", () => {
    expect(buildRepositoryUrl("owner/repo")).toBe("https://github.com/owner/repo");
  });
});

describe("buildSkillSourceUrl", () => {
  it("builds a skill source URL from the repository and slug", () => {
    expect(buildSkillSourceUrl("owner/repo", "commit")).toBe(
      "https://github.com/owner/repo/tree/main/skills/commit"
    );
  });
});

describe("buildInstallCommand", () => {
  it("builds a collection install command", () => {
    expect(buildInstallCommand("owner/repo")).toBe("npx skills@latest add owner/repo");
  });

  it("builds a single-skill install command", () => {
    expect(buildInstallCommand("owner/repo", "commit")).toBe(
      "npx skills@latest add owner/repo --skill commit"
    );
  });
});

describe("buildSkillSummaries", () => {
  it("sorts skills by display name and builds install/source metadata", () => {
    const summaries = buildSkillSummaries(
      [
        {
          id: "handoff",
          data: {
            name: "Handoff",
            description: 'Use when the user says "handoff".',
            metadata: { summary: "Handoff context." },
          },
        },
        {
          id: "commit",
          data: {
            name: "Commit",
            description: 'Use when the user says "commit".',
            metadata: { summary: "Commit changes." },
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
        installCommand: "npx skills@latest add owner/repo --skill commit",
        sourceUrl: "https://github.com/owner/repo/tree/main/skills/commit",
        featured: false,
      },
      {
        slug: "handoff",
        name: "Handoff",
        summary: "Handoff context.",
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
          metadata: { summary: "Commit changes.", featured: "true" },
        },
      },
      {
        id: "handoff",
        data: {
          name: "Handoff",
          description: 'Use when the user says "handoff".',
          metadata: { summary: "Handoff context.", featured: "false" },
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
  it("uses the metadata summary", () => {
    expect(
      getSkillSummary({
        metadata: { summary: "Commit changes." },
      })
    ).toBe("Commit changes.");
  });

  it("rejects metadata without a summary", () => {
    expect(() => getSkillSummary({ metadata: { featured: "true" } })).toThrow(
      "Skill metadata.summary is required"
    );
  });
});

describe("isFeaturedMetadata", () => {
  it("treats only the string true as featured", () => {
    expect(isFeaturedMetadata("true")).toBe(true);
    expect(isFeaturedMetadata("false")).toBe(false);
    expect(isFeaturedMetadata(undefined)).toBe(false);
  });
});
