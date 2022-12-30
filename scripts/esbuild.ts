// @ts-nocheck
import path from "path";

import esbuild from "esbuild";

const dev = process.argv.includes("--dev");

const buildOptions: esbuild.BuildOptions = {
  entryPoints: [path.join("src", "extension.ts")],
  external: ["vscode"],
  bundle: true,
  minify: !dev,
  sourcemap: dev,
  watch: dev,
  logLevel: "info",
};

esbuild.build({
  ...buildOptions,
  platform: "node",
  format: "cjs",
  outfile: path.join("out", "node.js"),
});
