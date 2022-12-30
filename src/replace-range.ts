import { Range } from "./range";

export const replaceRange = (
  s: string,
  { start, end }: Range,
  replacement: string
) => s.substring(0, start) + replacement + s.substring(end);
