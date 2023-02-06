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

export const None = Symbol("None");

/**
 * Applies function to elements of the given array and returns the first non-none result
 * @see None
 */
export function findAndMap<I, R>(
  input: I[],
  finderAndMapper: (item: I, index: number) => R | typeof None
): R | undefined {
  for (let i = 0; i < input.length; i++) {
    const item = input[i];
    const result = finderAndMapper(item, i);
    if (result !== None) {
      return result;
    }
  }
}
