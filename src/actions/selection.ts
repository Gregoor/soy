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

  const ancestor = cursorNode
    .iterAncestors()
    .find((n) => !n.select().equals(cursor));
  if (!ancestor) {
    return cursor;
  }

  const { childrenRange } = ancestor;
  return childrenRange && !childrenRange.equals(cursor)
    ? childrenRange
    : ancestor.select();
}

export function shrinkSelection(
  code: Code,
  cursor: Range,
  initialCursor?: Range
): Range {
  if (!initialCursor || !cursor.includes(initialCursor)) {
    return code.tree.getNode(cursor).firstChild?.select() ?? cursor;
  }

  let currentCursor = initialCursor;
  while (cursor.includes(currentCursor)) {
    const nextCursor = extendSelection(code, currentCursor);
    if (nextCursor.equals(cursor)) {
      return currentCursor;
    }
    currentCursor = nextCursor;
  }
  return initialCursor;
}
