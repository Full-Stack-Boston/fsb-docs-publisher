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
  base: '/',
  cleanUrls: true,
  outDir: '../../dist/${SLUG}',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [{ text: '${TITLE}', items: [{ text: 'Overview', link: '/' }] }],
  },
})
CFG
cat > "$DEST/index.md" <<MD
# ${TITLE}

Public docs stub. Private ops stay on Wiki \`Products/${TITLE}/\`.
MD
echo "scaffolded $DEST"
