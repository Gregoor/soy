import * as path from "path";

import * as fs from "fs-extra";

fs.copyFileSync(
  path.join("node_modules", "web-tree-sitter", "tree-sitter.wasm"),
  path.join("out", "tree-sitter.wasm")
);

fs.copySync(
  path.join("node_modules", "tree-sitter-wasms", "out"),
  path.join("out")
);
