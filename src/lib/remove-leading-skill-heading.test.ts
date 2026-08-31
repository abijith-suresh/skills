import type { Root } from "mdast";
import { describe, expect, it } from "vitest";
import { findLeadingSkillHeading } from "./remove-leading-skill-heading";

describe("findLeadingSkillHeading", () => {
  it("finds the first level-one heading in skill content", () => {
    const tree: Root = {
      type: "root",
      children: [
        { type: "heading", depth: 1, children: [{ type: "text", value: "Commit" }] },
        { type: "heading", depth: 2, children: [{ type: "text", value: "Goals" }] },
      ],
    };

    expect(findLeadingSkillHeading(tree)).toMatchObject({ type: "heading", depth: 1 });
  });

  it("returns no heading when content starts without a level-one heading", () => {
    const tree: Root = {
      type: "root",
      children: [{ type: "paragraph", children: [{ type: "text", value: "Content" }] }],
    };

    expect(findLeadingSkillHeading(tree)).toBeUndefined();
  });
});
