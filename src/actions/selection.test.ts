import { beforeAll, expect, test } from "@jest/globals";

import { Code } from "~/code";
import { cursorifySource, parseCursorSource } from "~/cursor-source";
import { initParser } from "~/parser";

import { extendSelection } from "./selection";

beforeAll(async () => {
  await initParser();
});

test.each([
  ["let n = [≤42≥];", "let n = ≤[42]≥;"],
  ["() => { ≤23≥ };", "() => ≤{ 23 }≥;"],
  ["/* a\n   •b */", "/* ≤a\n   ≥b */"],
  ['f("a•b")', 'f(≤"ab"≥)'],
  [["{", "  asd•ef;", "}"].join("\n"), ["{", "  ≤asdef≥;", "}"].join("\n")],
])("%s", (sourceWithCursor: string, expected: string) => {
  const { source, cursors } = parseCursorSource(sourceWithCursor);
  const code = new Code(source, "javascript");
  const range = extendSelection(code, cursors[0]);
  expect(cursorifySource(source, [range])).toBe(expected);
});
