import { describe, expect, it } from "vitest";
import { buildOgRoutes, buildPageTitle, getOgImagePath } from "@/lib/route-metadata";

describe("buildPageTitle", () => {
  it("uses the bare domain for the home page", () => {
    expect(buildPageTitle()).toBe("skills.abijith.sh");
  });

  it("joins a page name with the domain using the middle-dot separator", () => {
    expect(buildPageTitle("all skills")).toBe("all skills · skills.abijith.sh");
  });

  it("builds detail titles as the skill name and domain", () => {
    expect(buildPageTitle("commit")).toBe("commit · skills.abijith.sh");
  });

  it("builds the 404 title", () => {
    expect(buildPageTitle("page not found")).toBe("page not found · skills.abijith.sh");
  });
});

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

  it("maps the all-skills route to its own image", () => {
    expect(getOgImagePath("/all/")).toBe("/og/all.png");
  });
});

describe("buildOgRoutes", () => {
  it("creates catalog, all-skills, and per-skill routes", () => {
    expect(
      buildOgRoutes([{ id: "commit", data: { name: "Commit", description: "Create commits." } }])
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
