import { describe, expect, it } from "@jest/globals";

import { cursorifySource, parseCursorSource } from "./cursor-source";
import { Range } from "./range";

const parse = (s: string) => {
  const { source, cursors } = parseCursorSource(s);
  return [source, cursors.map((c) => c.toString())] as const;
};

describe("parse", () => {
  it("single cursors", () => {
    expect(parse("1•23•")).toEqual(["123", ["1", "3"]]);
  });

  it("multi cursors", () => {
    expect(parse("≤12≥34•")).toEqual(["1234", ["≤0:2≥", "4"]]);
  });

  it("nests cursors", () => {
    expect(parse("≤1≤2≥3≥4•")).toEqual(["1234", ["≤1:2≥", "≤0:3≥", "4"]]);
  });
});

describe("cursorify", () => {
  it("single cursors", () => {
    expect(cursorifySource("123", [new Range(1), new Range(3)])).toBe("1•23•");
  });

  it("multi cursors", () => {
    expect(cursorifySource("1234", [new Range(0, 2), new Range(4)])).toEqual(
      "≤12≥34•"
    );
  });

  it("nests cursors", () => {
    expect(
      cursorifySource("1234", [new Range(1, 2), new Range(0, 3), new Range(4)])
    ).toBe("≤1≤2≥3≥4•");
  });

  it("always places single cursor within range", () => {
    expect(cursorifySource("12", [new Range(2), new Range(0, 2)])).toBe(
      "≤12•≥"
    );
    expect(cursorifySource("12", [new Range(0, 2), new Range(2)])).toBe(
      "≤12•≥"
    );

    expect(cursorifySource("12", [new Range(0), new Range(0, 2)])).toBe(
      "≤•12≥"
    );

    expect(cursorifySource("12", [new Range(0, 2), new Range(0)])).toBe(
      "≤•12≥"
    );
  });
});
