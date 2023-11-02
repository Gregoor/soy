import { SyntaxNode } from "web-tree-sitter";

import { changeCode, Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";
import { sliceRange } from "~/utils";

const isFieldOnParent = (n: SyntaxNode) =>
  n.parent?.childForFieldName(n.type)?.equals(n);

export function unwrap(code: Code, cursor: Range): Sub | null {
  const node = code.tree.getNode(cursor);
  for (const ancestor of node.iterAncestors()) {
    if (cursor.includes(ancestor) || isFieldOnParent(ancestor.inner)) {
      continue;
    }

    const nodeSource = sliceRange(code.source, node);
    const { childrenRange } = ancestor;
    for (const range of childrenRange && !childrenRange.equals(node)
      ? [childrenRange, ancestor.select()]
      : [ancestor.select()]) {
      const sub = new Sub(range, nodeSource);
      const newCode = changeCode(code, [sub]);
      const newNode = newCode.tree.getNode(
        Range.fromLength(range.start, nodeSource.length)
      );
      if (
        !newCode.tree.hasError() &&
        sliceRange(newCode.source, newNode) == nodeSource
      ) {
        return sub;
      }
    }
  }
  return null;
}
