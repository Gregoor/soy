import { Sub } from "~/change";
import { Code } from "~/code";
import { Range } from "~/range";
import { replaceRange } from "~/replace-range";

type MoveChange = {
  subs: Sub[];
  cursor: Range;
};

export const applySubs = (source: string, subs: Sub[]) =>
  subs.reduce(
    (s, { range, replacement }) => replaceRange(s, range, replacement),
    source
  );

const wouldError = (code: Code, subs: Sub[]) => {
  const testCode = code.copy();
  testCode.edit(
    subs.map(({ range: r, replacement: text }) => ({
      start: r.start,
      oldEnd: r.end,
      newEnd: r.start + text.length,
    })),
    applySubs(code.source, subs)
  );
  return testCode.tree.hasError();
};

export function move(
  code: Code,
  cursor: Range,
  offset: -1 | 1
): MoveChange | null {
  const collection = code.tree
    .getNode(cursor)
    .findAncestor((n) => n.namedChildCount > 1);

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
  ];
  subs.sort((s1, s2) => (s1.range.isBefore(s2.range) ? 1 : -1));

  if (!code.tree.hasError() && wouldError(code, subs)) {
    return move(code, collection.select(), offset);
  }

  return {
    subs,
    cursor: to.isBefore(from) ? Range.fromLength(to.start, from.length) : to,
  };
}
