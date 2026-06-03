// Pre-built tree-sitter-fsharp-signature WASM grammar for @plurnk/plurnk-mimetypes.
//
// This package ships exactly one thing: fsharp-signature.wasm at the package root.
// The framework's TreeSitterLanguageHandler resolves it at runtime via
// import.meta.resolve("@plurnk/plurnk-mimetypes-grammar-fsharp-signature/fsharp-signature.wasm").
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

/** Absolute filesystem path to the bundled fsharp-signature.wasm. */
export const wasmPath = path.join(here, "fsharp-signature.wasm");
