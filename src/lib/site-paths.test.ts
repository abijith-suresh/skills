import { describe, expect, it } from "vitest";
import { buildSkillPath } from "./site-paths";

describe("buildSkillPath", () => {
  it("builds a trailing-slash route from a base URL and slug", () => {
    expect(buildSkillPath("/skills/", "commit")).toBe("/skills/commit/");
  });

  it("normalizes a base URL without a trailing slash", () => {
    expect(buildSkillPath("/skills", "commit")).toBe("/skills/commit/");
  });
});
