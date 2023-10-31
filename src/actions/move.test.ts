import { beforeAll, expect, test } from "@jest/globals";
import assert from "assert";

import { Code } from "~/code";
import { cursorifySource, parseCursorSource } from "~/cursor-source";
import { initParser } from "~/parser";
import { applySubs } from "~/utils";

import { move } from "./move";

beforeAll(async () => {
  await initParser();
});

test.each([
  ["[≤a≥, b]", "[b, ≤a≥]", +1],
  ["[≤aa≥, b]", "[b, ≤aa≥]", +1],
  ["[a, ≤b≥]", "[≤b≥, a]", -1],
  ["[≤aa≥, bbb]", "[bbb, ≤aa≥]", +1],
  ["[b, f(≤a≥)]", "[≤f(a)≥, b]", -1],
  // ["[•1, []]", "[[1]]", +1],
])("%s", (sourceWithCursor: string, expected: string, offset: number) => {
  assert(offset == -1 || offset == 1);
  const { source, cursors } = parseCursorSource(sourceWithCursor);
  const code = new Code(source, "javascript");
  const change = move(code, cursors[0], offset);
  expect(change).toBeTruthy();
  assert(change);
  expect(cursorifySource(applySubs(source, change.subs), [change.cursor])).toBe(
    expected
  );
});
