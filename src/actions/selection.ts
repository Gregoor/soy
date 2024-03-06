import { Code } from "~/code";
import { Range } from "~/range";
import { SoyNode, SoyTree } from "~/soy-tree";

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

const getLineage = (node: SoyNode) =>
  [node].concat(Array.from(node.iterAncestors()));

function findClosestCollection(tree: SoyTree, range: Range) {
  const { start, end } = range;
  const lineageEnd = getLineage(tree.getNode(end));
  const commonNode = getLineage(tree.getNode(start)).find((n1) =>
    lineageEnd.find((n2) => n1.equals(n2))
  );
  if (!commonNode) {
    return null;
  }
  if (commonNode.childCount > 0 && !range.includes(commonNode)) {
    return commonNode;
  }
  for (const ancestor of commonNode.iterAncestors()) {
    if (ancestor.childCount > 0) {
      return ancestor;
    }
  }
}

const findSelectedSiblings = (
  tree: SoyTree,
  range: Range
): [SoyNode, SoyNode] | null => {
  const collection = findClosestCollection(tree, range);
  if (!collection) {
    return null;
  }
  let endSibling: SoyNode | null = null;
  for (const child of collection.children.reverse()) {
    if (range.end >= child.start && !endSibling) {
      endSibling = child;
    }
    if (range.start >= child.start) {
      return [child, endSibling ?? child];
    }
  }
  return null;
};

function selectSibling(
  isPrev: boolean,
  tree: SoyTree,
  cursor: Range,
  initialCursor: Range
): Range {
  const siblings = findSelectedSiblings(tree, cursor);
  if (!siblings) {
    return cursor;
  }

  const [first, last] = siblings;
  const isAnchorAtEnd = last.select().includes(initialCursor);
  const [from, to] = isAnchorAtEnd ? [last, first] : [first, last];

  const sibling = isPrev ? to.previousSibling : to.nextSibling;

  return sibling ? Range.surround(from, sibling) : cursor;
}

function selectAncestorSibling(
  isPrev: boolean,
  code: Code,
  cursor: Range,
  initialCursor: Range
): Range {
  let newCursor = cursor;
  let isExtended = false;
  do {
    const sibRange = selectSibling(isPrev, code.tree, newCursor, initialCursor);
    if (
      !sibRange.equals(newCursor) &&
      !(isExtended && !sibRange.includes(newCursor))
    ) {
      return sibRange;
    }
    const parentRange = extendSelection(code, newCursor);
    if (parentRange.equals(newCursor)) {
      return cursor;
    }
    newCursor = parentRange;
    isExtended = true;
  } while (true);
}

export const selectPreviousSibling = selectAncestorSibling.bind(null, true);
export const selectNextSibling = selectAncestorSibling.bind(null, false);
