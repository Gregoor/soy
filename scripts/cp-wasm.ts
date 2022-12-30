import * as fs from "fs";
import * as path from "path";

fs.copyFileSync(
  path.join("node_modules", "web-tree-sitter", "tree-sitter.wasm"),
  path.join("out", "tree-sitter.wasm")
);

fs.copyFileSync(
  path.join("node_modules", "web-tree-sitter", "tree-sitter.wasm"),
  path.join("out", "tree-sitter.wasm")
);
