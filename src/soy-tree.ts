import { SyntaxNode, Tree } from "web-tree-sitter";

import { Range } from "./range";

export class SoyNode {
  inner: SyntaxNode;

  constructor(inner: SyntaxNode) {
    this.inner = inner;
  }

  get start() {
    return this.inner.startIndex;
  }
  get end() {
    return this.inner.endIndex;
  }

  get parent(): SoyNode | null {
    const { parent } = this.inner;
    return parent ? new SoyNode(parent) : null;
  }

  get namedChildCount(): number {
    return this.inner.namedChildCount;
  }

  get namedChildren(): SoyNode[] {
    return this.inner.namedChildren.map((n) => new SoyNode(n));
  }

  get firstChild(): SoyNode | null {
    const child = this.inner.firstNamedChild;
    return child ? new SoyNode(child) : null;
  }
  get lastChild(): SoyNode | null {
    const child = this.inner.lastNamedChild;
    return child ? new SoyNode(child) : null;
  }

  equals = (other: SoyNode) => this.inner.equals(other.inner);

  getNode = ({ start, end }: Range) =>
    new SoyNode(this.inner.descendantForIndex(start, end));

  findAncestor = (where: (ancestor: SoyNode) => any) => {
    let n: SoyNode = this;
    while (true) {
      let parent = n.parent;
      if (!parent) {
        return;
      }
      if (where(parent)) {
        return parent;
      }
      n = parent;
    }
  };

  select = () => new Range(this.inner.startIndex, this.inner.endIndex);
}

export class SoyTree {
  inner: Tree;

  constructor(inner: Tree) {
    this.inner = inner;
  }

  hasError = (): boolean => this.inner.rootNode.hasError();

  getNode = (a: Range | number) =>
    new SoyNode(
      this.inner.rootNode.descendantForIndex(
        ...((a instanceof Range ? [a.start, a.end] : [a]) as [number, number])
      )
    );
}
