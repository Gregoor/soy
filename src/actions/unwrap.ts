import { SyntaxNode } from "web-tree-sitter";

import { hasErrorAfterSubs, Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";
import { sliceRange } from "~/utils";

const isFieldOnParent = (n: SyntaxNode) =>
  n.parent?.childForFieldName(n.type)?.equals(n);

export function unwrap(code: Code, cursor: Range): Sub | null {
  const node = code.tree.getNode(cursor);
  if (!node.inner.isNamed()) {
    if (cursor.isSingle() && cursor.start > 0) {
      return unwrap(code, new Range(cursor.start - 1));
    }
    return null;
  }
  for (const ancestor of node.iterAncestors()) {
    if (cursor.includes(ancestor.select()) || isFieldOnParent(ancestor.inner)) {
      continue;
    }

    const { childrenRange } = ancestor;
    for (const range of childrenRange && !childrenRange.equals(node.select())
      ? [childrenRange, ancestor.select()]
      : [ancestor.select()]) {
      const sub = new Sub(range, sliceRange(code.source, node));
      if (!hasErrorAfterSubs(code, [sub])) {
        return sub;
      }
    }
  }
  return null;
}
