import type { Root } from "mdast";
import { describe, expect, it } from "vitest";
import { findLeadingSkillHeading } from "@/lib/remove-leading-skill-heading";

describe("findLeadingSkillHeading", () => {
  it("finds a level-one heading only when it leads the document", () => {
    const tree: Root = {
      type: "root",
      children: [
        { type: "heading", depth: 1, children: [{ type: "text", value: "Commit" }] },
        { type: "heading", depth: 2, children: [{ type: "text", value: "Goals" }] },
      ],
    };

    expect(findLeadingSkillHeading(tree)).toMatchObject({ type: "heading", depth: 1 });
  });

  it("returns no heading when a later level-one heading follows another block", () => {
    const tree: Root = {
      type: "root",
      children: [
        { type: "paragraph", children: [{ type: "text", value: "Intro" }] },
        { type: "heading", depth: 1, children: [{ type: "text", value: "Details" }] },
      ],
    };

    expect(findLeadingSkillHeading(tree)).toBeUndefined();
  });
});
