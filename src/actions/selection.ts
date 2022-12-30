import { Code } from "~/code";
import { Range } from "~/range";

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
  return ancestor ? ancestor.select() : cursor;
}

export function shrinkSelection(
  { tree }: Code,
  cursor: Range,
  initialCursor?: Range
) {
  if (!initialCursor) {
    return tree.getNode(cursor).firstChild?.select() ?? cursor;
  }

  let preRange: Range | null = null;
  tree
    .getNode(cursor)
    .getNode(initialCursor)
    .findAncestor((n) => {
      const range = n.select();
      const isEqualToCursor = range.equals(cursor);
      if (!isEqualToCursor) {
        preRange = range;
      }
      return isEqualToCursor;
    });
  return preRange || cursor;
}
