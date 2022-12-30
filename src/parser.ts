import path from "path";

import Parser from "web-tree-sitter";

const basePath = process.env.IS_DEV
  ? path.join(__dirname, "..", "node_modules", "tree-sitter-wasms", "out")
  : __dirname;

const languages = {
  c: "tree-sitter-c",
  cpp: "tree-sitter-cpp",
  csharp: "tree-sitter-c_sharp",
  css: "tree-sitter-css",
  go: "tree-sitter-go",
  html: "tree-sitter-html",
  java: "tree-sitter-java",
  javascript: "tree-sitter-javascript",
  javascriptreact: "tree-sitter-javascript",
  json: "tree-sitter-json",
  python: "tree-sitter-python",
  ruby: "tree-sitter-ruby",
  rust: "tree-sitter-rust",
  typescript: "tree-sitter-typescript",
  typescriptreact: "tree-sitter-tsx",
  yaml: "tree-sitter-yaml",
};

export type LanguageId = keyof typeof languages;

let languageParsers: Record<LanguageId, Parser.Language>;

export async function initParser() {
  await Parser.init();
  languageParsers = {} as any;
  for (const [id, name] of Object.entries(languages)) {
    const language = await Parser.Language.load(
      path.join(basePath, name + ".wasm")
    );
    languageParsers[id as LanguageId] = language;
  }
}

export const LANGUAGE_IDS = Object.keys(languages) as LanguageId[];

const parsers = new Map<LanguageId, Parser>();

export function getParser(id: LanguageId): Parser {
  let parser = parsers.get(id);
  if (parser) {
    return parser;
  }

  parser = new Parser();
  parser.setLanguage(languageParsers[id]);

  parsers.set(id, parser);

  return parser;
}
