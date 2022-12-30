import vscode, {
  ExtensionContext,
  TextDocument,
  TextDocumentChangeEvent,
  TextEditor,
  TextEditorEdit,
  window,
  workspace,
} from "vscode";

import { move } from "./actions/move";
import { extendSelection, shrinkSelection } from "./actions/selection";
import { unwrap } from "./actions/unwrap";
import { Code } from "./code";
import { initParser, LanguageId, LANGUAGE_IDS } from "./parser";
import { Range } from "./range";

const toOffsetRange = (d: TextDocument, r: vscode.Range) =>
  new Range(d.offsetAt(r.start), d.offsetAt(r.end));

const toPointRange = (d: TextDocument, r: Range) =>
  new vscode.Range(d.positionAt(r.start), d.positionAt(r.end));

const toSelection = (d: TextDocument, r: Range) =>
  new vscode.Selection(d.positionAt(r.start), d.positionAt(r.end));

const codes = new WeakMap<TextDocument, Code>();

const getOrInitCode = (document: TextDocument) => {
  if (codes.has(document)) {
    return codes.get(document);
  }
  const languageId = document.languageId as LanguageId;
  if (!LANGUAGE_IDS.includes(languageId)) {
    return;
  }

  const code = new Code(
    document.getText(),
    languageId,
    document.eol == vscode.EndOfLine.LF ? "\n" : "\r\n"
  );
  codes.set(document, code);
  return code;
};

const handleDidChangeActiveTextEditor = (editor: TextEditor | undefined) => {
  if (!editor) {
    return;
  }
  const { document } = editor;
  getOrInitCode(document);
};

const handleDidChangeTextDocument = ({
  document,
  contentChanges,
}: TextDocumentChangeEvent) => {
  const code = getOrInitCode(document);
  if (!code) {
    return;
  }

  code.edit(
    contentChanges.map(({ rangeOffset: start, rangeLength, text }) => ({
      start,
      oldEnd: start + rangeLength,
      newEnd: start + text.length,
    })),
    document.getText()
  );
};

const initialCursors = new WeakMap<TextDocument, Range>();

type TextCommandParams = {
  code: Code;
  cursor: Range;
  textEditor: TextEditor;
  edit: TextEditorEdit;
};

const handleMove = (
  { code, cursor, textEditor }: TextCommandParams,
  offset: -1 | 1
) => {
  const change = move(code, cursor, offset);
  if (!change) {
    return;
  }
  const { document } = textEditor;
  textEditor
    .edit((edit) => {
      for (const sub of change.subs) {
        edit.replace(toPointRange(document, sub.range), sub.replacement);
      }
    })
    .then(() => {
      textEditor.selection = toSelection(textEditor.document, change.cursor);
    });
};

const commands: Record<string, (params: TextCommandParams) => void> = {
  extendSelection: ({ code, cursor, textEditor }) => {
    const { document } = textEditor;
    if (cursor.isSingle()) {
      initialCursors.set(document, cursor);
    }
    textEditor.selection = toSelection(document, extendSelection(code, cursor));
  },

  shrinkSelection: ({ code, cursor, textEditor }) => {
    const { document } = textEditor;
    const initialCursor = initialCursors.get(document);
    textEditor.selection = toSelection(
      document,
      shrinkSelection(code, cursor, initialCursor)
    );
  },

  unwrap: ({ code, cursor, textEditor }) => {
    const sub = unwrap(code, cursor);
    if (sub) {
      textEditor.insertSnippet(
        new vscode.SnippetString(`$\{0:${sub.replacement}}`),
        toPointRange(textEditor.document, sub.range)
      );
    }
  },

  moveRight: (p) => handleMove(p, +1),
  moveLeft: (p) => handleMove(p, -1),
};

export async function activate(context: ExtensionContext) {
  await initParser();
  context.subscriptions.push(
    window.onDidChangeActiveTextEditor(handleDidChangeActiveTextEditor),
    workspace.onDidChangeTextDocument(handleDidChangeTextDocument),
    ...Object.entries(commands).map(([key, callback]) =>
      vscode.commands.registerTextEditorCommand(
        `soy.${key}`,
        (textEditor, edit) => {
          if (textEditor.selections.length > 1) {
            return;
          }
          const { document, selection } = textEditor;
          const code = getOrInitCode(document);
          if (!code) {
            return;
          }
          const cursor = toOffsetRange(document, selection);
          return callback({ code, cursor, textEditor, edit });
        }
      )
    )
  );
}
