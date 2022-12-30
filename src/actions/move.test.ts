import { beforeAll, expect, test } from "@jest/globals";
import assert from "assert";

import { Code } from "~/code";
import { cursorifySource, parseCursorSource } from "~/cursor-source";
import { initParser } from "~/parser";

import { applySubs, move } from "./move";

beforeAll(async () => {
  await initParser();
});

test.each([
  ["[a, ≤b≥, c]", "[a, c, ≤b≥]", +1],
  ["[≤aa≥, b]", "[b, ≤aa≥]", +1],
  ["[a, c, ≤b≥]", "[a, ≤b≥, c]", -1],
  ["[b, f(≤a≥)]", "[≤f(a)≥, b]", -1],
])("%s", (sourceWithCursor: string, expected: string, offset: number) => {
  assert(offset == -1 || offset == 1);
  const { source, cursors } = parseCursorSource(sourceWithCursor);
  const code = new Code(source, "javascript");
  const change = move(code, cursors[0], offset);
  assert(change);
  expect(cursorifySource(applySubs(source, change.subs), [change.cursor])).toBe(
    expected
  );
});
