import { Code } from "~/code";
import { Range } from "~/range";
import { SoyNode } from "~/soy-tree";

export function extendSelection(code: Code, cursor: Range): Range {
  const { tree } = code;

  const { row, column } = code.positionAt(cursor.start);
  const upOffset =
    row - 1 < 0 ? code.offsetAt(0, 0) : code.offsetAt(row - 1, column + 1);
  const upNode = tree.getNode(upOffset);

  const cursorNode = tree.getNode(cursor);

  if (upNode.equals(cursorNode)) {
    return new Range(upOffset, cursor.end);
  }

  if (!cursorNode.select().equals(cursor)) {
    return cursorNode.select();
  }

  const ancestor = cursorNode.findAncestor((n) => !n.select().equals(cursor));
  if (!ancestor) {
    return cursor;
  }

  if (ancestor.namedChildCount > 0) {
    const childrenRange = new Range(
      ancestor.firstChild!.start,
      ancestor.lastChild!.end
    );
    if (!childrenRange.equals(cursor)) {
      return childrenRange;
    }
  }

  return ancestor.select();
}

export function shrinkSelection(
  { tree }: Code,
  cursor: Range,
  initialCursor?: Range
) {
  if (!initialCursor) {
    return tree.getNode(cursor).firstChild?.select() ?? cursor;
  }

  let descendant: SoyNode | null = null;
  tree
    .getNode(cursor)
    .getNode(initialCursor)
    .findAncestor((n) => {
      const range = n.select();
      const isEqualToCursor = range.equals(cursor);
      if (!isEqualToCursor) {
        descendant = n;
      }
      return isEqualToCursor;
    });
  return descendant!?.select() || cursor;
}
