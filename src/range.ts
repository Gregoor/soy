type RangeLike = {
  start: number;
  end: number;
};

export class Range {
  anchor: number;
  private readonly _active: null | number;

  static surround(...items: (RangeLike | number)[]) {
    return new Range(
      Math.min(...items.map((r) => (typeof r == "number" ? r : r.start!))),
      Math.max(...items.map((r) => (typeof r == "number" ? r : r.end!)))
    );
  }

  constructor(anchor: number, active: number | null = null) {
    this.anchor = anchor;
    this._active = active;
  }

  static fromLength = (anchor: number, length: number) =>
    new Range(anchor, anchor + length);

  get active() {
    return this._active ?? this.anchor;
  }

  get start() {
    return Math.min(this.anchor, this.active);
  }

  get end() {
    return Math.max(this.anchor, this.active);
  }

  get length() {
    return Math.abs(this.end - this.start);
  }

  isSingle() {
    return this.anchor == this.active;
  }

  includes(pos: number | RangeLike): boolean {
    return (typeof pos == "number" ? [pos] : [pos.start, pos.end]).every(
      (pos) => pos >= this.start && pos <= this.end
    );
  }

  equals(other: RangeLike) {
    return this.start == other.start && this.end == other.end;
  }

  isBefore(other: Range) {
    return this.start < other.start;
  }

  toString = () =>
    this.isSingle() ? this.start.toString() : `≤${this.start}:${this.end}≥`;

  toJSON = this.toString;
}
