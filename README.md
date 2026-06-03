# @plurnk/plurnk-mimetypes-grammar-fsharp-signature

Pre-built `tree-sitter-fsharp-signature` WASM grammar for the [@plurnk/plurnk-mimetypes](https://github.com/plurnk/plurnk-mimetypes) framework.

## install

```
npm i @plurnk/plurnk-mimetypes-grammar-fsharp-signature
```

## what's in here

- **`fsharp-signature.wasm`** — pre-built from the pinned upstream [tree-sitter-fsharp-signature](https://github.com/ionide/tree-sitter-fsharp) commit (`fsharp_signature` subdirectory) (SHA in `.grammar-pin`)
- `scripts/build-wasm.mjs` — reproducible rebuild from the pinned source
- `scripts/verify-wasm.mjs` — CI byte-identical reproducibility check

Declares only `web-tree-sitter` as a peer — no native `tree-sitter`, no node-gyp.

## license

MIT. The bundled `fsharp-signature.wasm` is built from the upstream tree-sitter-fsharp-signature grammar; see the pinned commit for that project's attribution.
