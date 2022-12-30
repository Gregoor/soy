import { Range } from "./range";

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
