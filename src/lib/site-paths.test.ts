import { describe, expect, it } from "vitest";
import { buildAllPath, buildAssetPath, buildCanonicalUrl, buildSkillPath } from "@/lib/site-paths";

describe("buildAssetPath", () => {
  it("keeps root-hosted assets at the root", () => {
    expect(buildAssetPath("/", "fonts/IBMPlexSansVar-Roman.woff2")).toBe(
      "/fonts/IBMPlexSansVar-Roman.woff2"
    );
  });

  it("normalizes a base path before appending an asset", () => {
    expect(buildAssetPath("/docs", "/fonts/site.woff2")).toBe("/docs/fonts/site.woff2");
  });
});

describe("buildSkillPath", () => {
  it("builds a root-hosted trailing-slash route", () => {
    expect(buildSkillPath("/", "commit")).toBe("/commit/");
  });
});

describe("buildAllPath", () => {
  it("builds a root-hosted all-skills route", () => {
    expect(buildAllPath("/")).toBe("/all/");
  });
});

describe("buildCanonicalUrl", () => {
  it("normalizes the route and preserves the trailing slash", () => {
    expect(buildCanonicalUrl("/commit", "https://example.com")).toBe("https://example.com/commit/");
  });

  it("returns the site root for an empty path", () => {
    expect(buildCanonicalUrl("", "https://example.com")).toBe("https://example.com/");
  });
});
