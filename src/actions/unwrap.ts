import { SyntaxNode } from "web-tree-sitter";

import { isErrAfterSubs, Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";

const isFieldOnParent = (n: SyntaxNode) =>
  n.parent?.childForFieldName(n.type)?.equals(n);

export function unwrap(code: Code, cursor: Range): Sub | null {
  const node = code.tree.getNode(cursor);
  if (!node.inner.isNamed()) {
    return null;
  }
  for (const ancestor of node.iterAncestors()) {
    if (cursor.includes(ancestor.select()) || isFieldOnParent(ancestor.inner)) {
      continue;
    }
    const sub = new Sub(
      ancestor.select(),
      code.source.slice(node.start, node.end)
    );
    if (!isErrAfterSubs(code, [sub])) {
      return sub;
    }
  }
  return null;
}
