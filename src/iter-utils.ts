class Iter<T> {
  iter: Generator<T>;
  constructor(iter: Generator<T>) {
    this.iter = iter;
  }

  [Symbol.iterator]() {
    return this.iter;
  }

  find(predicate: (this: void, item: T) => unknown): T | undefined {
    for (const item of this.iter) {
      if (predicate(item)) {
        return item;
      }
    }
  }
}

export const _ = <T>(iter: Generator<T>) => new Iter(iter);
