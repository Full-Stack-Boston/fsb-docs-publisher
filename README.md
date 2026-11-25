# fsb-docs-publisher

Shared **VitePress** docs publisher for FSB product docs ([IDEA-30](https://plane.fullstackboston.com/fsb/browse/IDEA-30)).

- **Private ops** stay on Wiki.js (`Products/<Name>/`, Authentik).
- **Public `1` scores** build here and publish to **GitHub Pages** (+ custom `docs.*` DNS).

## Bonaloop (pilot)

```bash
npm ci
npm run docs:bonaloop:dev
npm run docs:bonaloop:build
```

Public hostname target: `docs.bonaloop.com`. Private pack: Wiki `Products/Bonaloop/`.

## Add a product

```bash
bash scripts/new-product.sh <slug>
```

## Lab rules

- No secret values in markdown.
- Score `-1` products are not added.
- Score `0` products use Wiki only.
