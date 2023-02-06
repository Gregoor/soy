import { SyntaxNode, Tree } from "web-tree-sitter";
import { _ } from "./iter-utils";

import { Range } from "./range";

function* iterAncestors(n: SoyNode | null) {
  while ((n = n?.parent ?? null)) {
    yield n;
  }
}

export class SoyNode {
  inner: SyntaxNode;

  constructor(inner: SyntaxNode) {
    this.inner = inner;
  }

  /* Start of SyntaxNode Proxy methods */
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

  get childCount(): number {
    return this.inner.namedChildCount;
  }

  get children(): SoyNode[] {
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

  get previousSibling(): SoyNode | null {
    const child = this.inner.previousNamedSibling;
    return child ? new SoyNode(child) : null;
  }
  get nextSibling(): SoyNode | null {
    const child = this.inner.nextNamedSibling;
    return child ? new SoyNode(child) : null;
  }
  /* End of SyntaxNode Proxy methods */

  get childrenRange(): Range | null {
    const { firstChild, lastChild } = this;
    return firstChild && lastChild
      ? new Range(firstChild.start, lastChild.end)
      : null;
  }

  equals = (other: SoyNode) => this.inner.equals(other.inner);

  iterAncestors = () => _(iterAncestors(this));

  select = () => new Range(this.inner.startIndex, this.inner.endIndex);
}

export class SoyTree {
  inner: Tree;

  constructor(inner: Tree) {
    this.inner = inner;
  }

  hasError = (): boolean => this.inner.rootNode.hasError();

  getNode = (a: Range | number): SoyNode => {
    const { rootNode } = this.inner;

    const index = (a instanceof Range ? [a.start, a.end] : [a]) as [number];
    let node = rootNode.descendantForIndex(...index);
    if (node.isNamed()) {
      return new SoyNode(node);
    }

    if (typeof a == "number") {
      node = rootNode.namedDescendantForIndex(a - 1);
    } else if (a.isSingle()) {
      node = rootNode.namedDescendantForIndex(a.start - 1);
    } else {
      node = rootNode.namedDescendantForIndex(...index);
    }
    return new SoyNode(node);
  };
}
