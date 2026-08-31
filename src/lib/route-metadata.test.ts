import { describe, expect, it } from "vitest";
import { buildOgRoutes, getOgImagePath } from "./route-metadata";

describe("getOgImagePath", () => {
  it("maps the catalog root to its static image", () => {
    expect(getOgImagePath("/")).toBe("/og/index.png");
  });

  it("maps a skill route to its static image", () => {
    expect(getOgImagePath("/commit")).toBe("/og/commit.png");
  });

  it("uses the catalog image for the noindex 404 page", () => {
    expect(getOgImagePath("/404/")).toBe("/og/index.png");
  });
});

describe("buildOgRoutes", () => {
  it("creates one catalog route and one route per skill", () => {
    expect(
      buildOgRoutes([{ id: "commit", data: { name: "Commit", description: "Create commits." } }])
    ).toEqual([
      {
        slug: "index",
        title: "Skills",
        description: "Standalone workflows for AI coding agents.",
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
