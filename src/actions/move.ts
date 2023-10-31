import { hasErrorAfterSubs, Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";
import { sliceRange } from "~/utils";

type MoveChange = {
  subs: Sub[];
  cursor: Range;
};

// language based config? e.g.
// - javascript
//   - ternary_expression

export function move(
  code: Code,
  cursor: Range,
  offset: -1 | 1
): MoveChange | null {
  const { tree, source } = code;
  const collection = tree
    .getNode(cursor)
    .iterAncestors()
    .find((n) => n.childCount > 1);

  if (!collection) {
    return null;
  }

  const items = collection.children;
  const index = items.findIndex((n) => n.select().includes(cursor));

  const to = items[index + offset]?.select();

  if (!to || index == -1) {
    return move(code, collection.select(), offset);
  }

  const from = items[index].select();

  const subs = [
    new Sub(to, sliceRange(source, from)),
    new Sub(from, sliceRange(source, to)),
  ].sort((s1, s2) => (s1.range.isBefore(s2.range) ? 1 : -1));

  if (hasErrorAfterSubs(code, subs)) {
    return move(code, collection.select(), offset);
  }

  return {
    subs,
    cursor: Range.fromLength(
      to.isBefore(from) ? to.start : to.start - (from.length - to.length),
      from.length
    ),
  };
}
