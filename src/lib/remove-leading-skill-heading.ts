import type { Root } from "mdast";
import { defineMdastPlugin } from "satteri";

export function findLeadingSkillHeading(tree: Root) {
  return tree.children.find((node) => node.type === "heading" && node.depth === 1);
}

export default defineMdastPlugin({
  name: "remove-leading-skill-heading",
  before(root, context) {
    const heading = findLeadingSkillHeading(root);
    if (heading) context.removeNode(heading);
  },
});
