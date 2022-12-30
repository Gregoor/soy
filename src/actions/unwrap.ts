import { SyntaxNode } from "web-tree-sitter";

import { Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";

const isFieldOnParent = (n: SyntaxNode) =>
  n.parent?.childForFieldName(n.type)?.equals(n);

export function unwrap({ tree, source }: Code, cursor: Range): Sub | null {
  const node = tree.getNode(cursor);
  if (!node.inner.isNamed()) {
    return null;
  }
  const ancestor = node.findAncestor(
    (n) => !n.select().equals(cursor) && !isFieldOnParent(n.inner)
  );

  return ancestor
    ? new Sub(ancestor.select(), source.slice(node.start, node.end))
    : null;
}
