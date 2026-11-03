import { describe, expect, it } from "vitest";
import { buildOgRoutes } from "@/lib/route-metadata";

describe("buildOgRoutes", () => {
  it("creates catalog, all-skills, and per-skill routes", () => {
    expect(
      buildOgRoutes([
        {
          id: "commit",
          data: {
            name: "Commit",
            description: 'Use when the user says "commit".',
            metadata: { summary: "Create commits." },
          },
        },
      ])
    ).toEqual([
      {
        slug: "index",
        title: "skills",
        description: "Standalone workflows for AI coding agents.",
        label: "catalog",
      },
      {
        slug: "all",
        title: "all skills",
        description: "Every skill in the collection.",
        label: "catalog",
      },
      {
        slug: "commit",
        title: "Commit",
        description: "Create commits.",
        label: "skill",
      },
    ]);
  });
});
