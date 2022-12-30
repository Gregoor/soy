import Parser, { Tree } from "web-tree-sitter";

import { getParser, LanguageId } from "./parser";
import { PrefixSumComputer } from "./prefix-sum-computer";
import { SoyTree } from "./soy-tree";

export class Code {
  private parser: Parser;
  private _source: string;
  private languageId: LanguageId;
  private eol: string;
  tree: SoyTree;

  constructor(
    source: string,
    languageId: LanguageId,
    eol = "\n",
    tree: Tree | null = null
  ) {
    this.languageId = languageId;
    this.parser = getParser(languageId);
    this.tree = new SoyTree(tree || this.parser.parse(source));
    this._source = source;
    this.eol = eol;
  }

  get source() {
    return this._source;
  }

  private _lines: string[] | null = null;
  get lines() {
    if (!this._lines) {
      this._lines = this.source.split(this.eol);
    }
    return this._lines;
  }

  private _lineStarts: PrefixSumComputer | null = null;
  get lineStarts() {
    if (!this._lineStarts) {
      const linesLength = this.lines.length;
      const lineStartValues = new Uint32Array(linesLength);
      for (let i = 0; i < linesLength; i++) {
        lineStartValues[i] = this.lines[i].length + this.eol.length;
      }
      this._lineStarts = new PrefixSumComputer(lineStartValues);
    }
    return this._lineStarts;
  }

  private set source(value: string) {
    this._source = value;
    this._lines = this._lineStarts = null;
  }

  copy(): Code {
    return new Code(
      this.source,
      this.languageId,
      this.eol,
      this.tree.inner.copy()
    );
  }

  positionAt(offset: number) {
    offset = Math.floor(offset);
    offset = Math.max(0, offset);
    const out = this.lineStarts.getIndexOf(offset);
    const lineLength = this.lines[out.index].length;
    return { row: out.index, column: Math.min(out.remainder, lineLength) };
  }

  offsetAt(row: number, col: number) {
    const rowLength = this.lines[row].length;
    return (
      this.lineStarts.getPrefixSum(row - 1) +
      ((col > rowLength ? rowLength : col) - 1)
    );
  }

  edit(
    changes: Record<"start" | "oldEnd" | "newEnd", number>[],
    newSource: string
  ) {
    for (const { start, oldEnd, newEnd } of changes) {
      this.tree.inner.edit({
        startIndex: start,
        oldEndIndex: oldEnd,
        newEndIndex: newEnd,
        startPosition: this.positionAt(start),
        oldEndPosition: this.positionAt(oldEnd),
        newEndPosition: this.positionAt(newEnd),
      });
    }
    this.source = newSource;
    this.tree = new SoyTree(this.parser.parse(newSource, this.tree.inner));
  }
}
