import { Range } from "./range";

const sortByKeys = <T>(items: T[], getKeys: (item: T) => any[]) =>
  items.slice().sort((item1, item2) => {
    const keys1 = getKeys(item1);
    const keys2 = getKeys(item2);
    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] > keys2[i]) {
        return 1;
      } else if (keys1[i] < keys2[i]) {
        return -1;
      }
    }
    return 0;
  });

export const parseCursorSource = (sourceWithCursor: string) => {
  let source = "";
  const rangeStarts: number[] = [];
  const cursors: Range[] = [];
  for (const char of sourceWithCursor) {
    switch (char) {
      case "•":
        cursors.push(new Range(source.length));
        break;

      case "≤":
        rangeStarts.push(source.length);
        break;

      case "≥":
        const rangeStart = rangeStarts.pop();
        if (rangeStart == null) {
          throw new Error(
            `Unpaired ≥ at ${source.length} in ${sourceWithCursor}`
          );
        }
        cursors.push(new Range(rangeStart, source.length));
        break;

      default:
        source += char;
        break;
    }
  }
  return { source, cursors };
};

export function cursorifySource(source: string, cursors: [Range, ...Range[]]) {
  const cursorChars = sortByKeys(
    cursors.flatMap(
      (cursor) =>
        (cursor.isSingle()
          ? [[cursor.start, "•"]]
          : [
              [cursor.start, "≤"],
              [cursor.end, "≥"],
            ]) as [number, string][]
    ),
    ([start, char]) => [start, ["≤", "•", "≥"].findIndex((c) => c == char)]
  );

  return cursorChars.reduce(
    (source, [charIndex, char], i) =>
      source.slice(0, charIndex + i) + char + source.slice(charIndex + i),
    source
  );
}
