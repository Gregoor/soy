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
  logLevel: "info",
  platform: "node",
  format: "cjs",
  outfile: path.join("out", "node.js"),
  define: { "process.env.IS_DEV": JSON.stringify(dev) },
};

if (dev) {
  esbuild.context(buildOptions).then((context) => {
    context.watch();
  });
} else {
  esbuild.build(buildOptions);
}
