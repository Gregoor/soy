import { isErrAfterSubs, Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";

type MoveChange = {
  subs: Sub[];
  cursor: Range;
};

export function move(
  code: Code,
  cursor: Range,
  offset: -1 | 1
): MoveChange | null {
  const collection = code.tree
    .getNode(cursor)
    .iterAncestors()
    .find((n) => n.namedChildCount > 1);

  if (!collection) {
    return null;
  }

  const items = collection.namedChildren;
  const index = items.findIndex((n) => n.select().includes(cursor));

  const to = items[index + offset]?.select();

  if (!to || index == -1) {
    return move(code, collection.select(), offset);
  }

  const from = items[index].select();

  const subs = [
    new Sub(to, code.source.slice(from.start, from.end)),
    new Sub(from, code.source.slice(to.start, to.end)),
  ].sort((s1, s2) => (s1.range.isBefore(s2.range) ? 1 : -1));

  if (isErrAfterSubs(code, subs)) {
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
