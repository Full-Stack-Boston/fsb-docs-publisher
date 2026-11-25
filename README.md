# fsb-docs-publisher

Shared **VitePress** docs publisher for FSB product docs ([IDEA-30](https://plane.fullstackboston.com/fsb/browse/IDEA-30)).

Canonical host: **[docs.fullstackboston.com](https://docs.fullstackboston.com)**

- **Public (score `1`)** — VitePress under `/<slug>/`
- **Private (score `0`)** — same path style; build emits HTML redirects to Wiki `Products/<Name>/` (Authentik)

## Local

```bash
npm ci
npm run build:all
npm run docs:bonaloop:dev
```

## Add a public product

```bash
bash scripts/new-product.sh <slug>
# then link it from products/umbrella/index.md
```

## Lab rules

- No secret values in markdown.
- Score `-1` products are not added.
