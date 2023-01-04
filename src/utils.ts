import { Sub } from "./change";
import { Range } from "./range";

export const replaceRange = (
  s: string,
  { start, end }: Range,
  replacement: string
) => s.substring(0, start) + replacement + s.substring(end);

export const applySubs = (source: string, subs: Sub[]) =>
  subs.reduce(
    (s, { range, replacement }) => replaceRange(s, range, replacement),
    source
  );

export const sliceRange = (s: string, r: { start: number; end: number }) =>
  s.slice(r.start, r.end);
