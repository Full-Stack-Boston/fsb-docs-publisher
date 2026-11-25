# fsb-docs-publisher

Shared **VitePress** docs publisher for FSB product docs ([IDEA-30](https://plane.fullstackboston.com/fsb/browse/IDEA-30)).

- **Private ops (score `0`)** stay on Wiki.js (`Products/<Name>/`, Authentik). Host aliases `docs.*` redirect to Wiki.
- **Public (score `1`)** build here and publish to **GitHub Pages** at [docs.fullstackboston.com](https://docs.fullstackboston.com).

## Local

```bash
npm ci
npm run build:all
npm run docs:bonaloop:dev   # example product
```

## Add a public product

```bash
bash scripts/new-product.sh <slug>
# then link it from products/umbrella/index.md
```

## Lab rules

- No secret values in markdown.
- Score `-1` products are not added.
- Score `0` products use Wiki only (DNS → Wiki redirect).
