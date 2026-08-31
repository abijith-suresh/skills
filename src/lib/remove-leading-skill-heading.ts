import type { Root } from "mdast";
import { defineMdastPlugin } from "satteri";

export function findLeadingSkillHeading(tree: Root) {
  const firstNode = tree.children[0];
  return firstNode?.type === "heading" && firstNode.depth === 1 ? firstNode : undefined;
}

export default defineMdastPlugin({
  name: "remove-leading-skill-heading",
  before(root, context) {
    const heading = findLeadingSkillHeading(root);
    if (heading) context.removeNode(heading);
  },
});
