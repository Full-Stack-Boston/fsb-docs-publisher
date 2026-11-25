#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SLUG="${1:?usage: new-product.sh <slug>}"
DEST="$ROOT/products/$SLUG"
if [[ -e "$DEST" ]]; then
  echo "exists: $DEST" >&2
  exit 1
fi
mkdir -p "$DEST/.vitepress"
TITLE="$(echo "$SLUG" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++){ $i=toupper(substr($i,1,1)) substr($i,2)}; print}')"
cat > "$DEST/.vitepress/config.mts" <<CFG
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '${TITLE} Docs',
  description: 'Public product documentation for ${TITLE}',
  base: '/${SLUG}/',
  cleanUrls: true,
  outDir: '../../dist/${SLUG}',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [{ text: '${TITLE}', items: [{ text: 'Overview', link: '/' }] }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
CFG
cat > "$DEST/index.md" <<MD
# ${TITLE}

Public docs stub for **${TITLE}** (score \`1\`).

- Canonical path: \`https://docs.fullstackboston.com/${SLUG}/\`
- Private ops (if any) stay on Wiki under \`Products/\` (Authentik)
MD
echo "scaffolded $DEST — add a row to products/umbrella/index.md and npm run build:all"
