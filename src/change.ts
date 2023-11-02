import { Code } from "./code";
import { Range } from "./range";
import { subSource } from "./utils";

// A struct for substitutions
export class Sub {
  range: Range;
  replacement: string = "";

  constructor(range: Range, replacement?: string) {
    this.range = range;
    this.replacement = replacement ?? this.replacement;
  }
}

export type SubChange = { sub: Sub; cursor: Range };
export type Change = { sub?: Sub; cursor: Range };

export function changeCode(code: Code, subs: Sub[]) {
  const newCode = code.copy();
  newCode.edit(
    subs.map(({ range: r, replacement: text }) => ({
      start: r.start,
      oldEnd: r.end,
      newEnd: r.start + text.length,
    })),
    subSource(code.source, subs)
  );
  return newCode;
}

export function hasErrorAfterSubs(code: Code, subs: Sub[]) {
  if (code.tree.hasError()) {
    // TODO: granular error check
    return false;
  }
  return changeCode(code, subs).tree.hasError();
}
