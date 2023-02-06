import { beforeAll, describe, expect, test } from "@jest/globals";

import { Code } from "~/code";
import { cursorifySource, parseCursorSource } from "~/cursor-source";
import { initParser } from "~/parser";

import {
  extendSelection,
  selectNextSibling,
  selectPreviousSibling,
} from "./selection";

beforeAll(async () => {
  await initParser();
});

describe("extend", () => {
  test.each([
    ["let n = [≤42≥];", "let n = ≤[42]≥;"],
    ["() => { ≤23≥ };", "() => ≤{ 23 }≥;"],
    ["/* a\n   •b */", "/* ≤a\n   ≥b */"],
    ['f("a•b")', 'f(≤"ab"≥)'],
    [["{", "  asd•ef;", "}"].join("\n"), ["{", "  ≤asdef≥;", "}"].join("\n")],
    ["[≤a≥, b]", "[≤a, b≥]"],
  ])("%s", (sourceWithCursor: string, expected: string) => {
    const { source, cursors } = parseCursorSource(sourceWithCursor);
    const code = new Code(source, "javascript");
    const range = extendSelection(code, cursors[0]);
    expect(cursorifySource(source, [range])).toBe(expected);
  });
});

describe("siblings", () => {
  test.each([
    ["[1, ≤•42≥];", "[≤1, 42≥];"],
    ["[-1, ≤1, •42≥];", "[≤-1, 1, 42≥];"],
    ["[1, ≤•2, 3≥];", "[1, ≤2≥, 3];"],

    ["a; ≤•b;≥ c;", "≤a; b;≥ c;"],
    ["a; ≤let •b;≥ c;", "≤a; let b;≥ c;"],
  ])("previous: %s", (sourceWithCursor: string, expected: string) => {
    const { source, cursors } = parseCursorSource(sourceWithCursor);
    const code = new Code(source, "javascript");
    const range = selectPreviousSibling(code, cursors[1], cursors[0]);
    expect(cursorifySource(source, [range])).toBe(expected);
  });

  test.each([
    ["[≤1, •2≥, 3];", "[1, ≤2≥, 3];"],
    ["[≤1, 2, •3≥, 4];", "[1, ≤2, 3≥, 4];"],
    ["[1, ≤•2≥, 3];", "[1, ≤2, 3≥];"],

    ["[1, [2, ≤•3≥], 4];", "[1, ≤[2, 3], 4≥];"],
    ["[1, [≤•2, 3≥], 4];", "[1, ≤[2, 3], 4≥];"],

    ["({ a: 23, ≤b•: 42≥, c: 55 })", "({ a: 23, ≤b: 42, c: 55≥ })"],
  ])("next: %s", (sourceWithCursor: string, expected: string) => {
    const { source, cursors } = parseCursorSource(sourceWithCursor);
    const code = new Code(source, "javascript");
    const range = selectNextSibling(code, cursors[1], cursors[0]);
    expect(cursorifySource(source, [range])).toBe(expected);
  });
});
