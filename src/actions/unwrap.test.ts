import { beforeAll, expect, test } from "@jest/globals";
import assert from "assert";

import { Code } from "~/code";
import { cursorifySource, parseCursorSource } from "~/cursor-source";
import { initParser } from "~/parser";
import { Range } from "~/range";
import { replaceRange } from "~/replace-range";

import { unwrap } from "./unwrap";

beforeAll(async () => {
  await initParser();
});

test.each([
  ["let n = [4•2];", "let n = ≤42≥;"],
  ["() => { ≤23≥ };", "() => ≤23≥;"],
  ["fn(•a)", "≤a≥"],
])("%s", (sourceWithCursor: string, expected: string) => {
  const { source, cursors } = parseCursorSource(sourceWithCursor);
  const code = new Code(source, "javascript");

  const sub = unwrap(code, cursors[0]);
  assert(sub);
  const { range, replacement } = sub;

  expect(
    cursorifySource(replaceRange(source, range, replacement), [
      new Range(range.start, range.start + replacement.length),
    ])
  ).toBe(expected);
});
