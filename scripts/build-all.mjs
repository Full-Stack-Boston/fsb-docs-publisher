#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const productsDir = join(root, 'products')
const dist = join(root, 'dist')

rmSync(dist, { recursive: true, force: true })
mkdirSync(dist, { recursive: true })

const products = readdirSync(productsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort()

for (const slug of products) {
  const cfg = join(productsDir, slug, '.vitepress', 'config.mts')
  if (!existsSync(cfg)) continue
  console.log(`building ${slug}...`)
  const bin = join(root, 'node_modules', '.bin', 'vitepress')
  const r = spawnSync(bin, ['build', `products/${slug}`], {
    cwd: root,
    stdio: 'inherit',
    env: process.env,
    shell: false,
  })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

// Merge: umbrella at site root; each product under /slug/
const umbrella = join(dist, 'umbrella')
if (!existsSync(umbrella)) {
  console.error('missing umbrella build')
  process.exit(1)
}
for (const ent of readdirSync(umbrella, { withFileTypes: true })) {
  cpSync(join(umbrella, ent.name), join(dist, ent.name), { recursive: true })
}
rmSync(umbrella, { recursive: true, force: true })

writeFileSync(join(dist, 'CNAME'), 'docs.fullstackboston.com\n')

// Score-0 paths on the same host: static redirects to Wiki (Pages is DNS-only, so CF path rules cannot help).
const privateWiki = {
  nathan: 'Nathan',
  fsb: 'FSB',
  'fsb-cli': 'FSB-CLI',
  gamespotter: 'Gamespotter',
  folio: 'Folio',
  ficha: 'Ficha',
  rustdesk: 'Rustdesk',
  vaultwarden: 'Vaultwarden',
  'parker-fund': 'Parker-Fund',
}
for (const [slug, wikiPath] of Object.entries(privateWiki)) {
  const target = `https://wiki.fullstackboston.com/en/Products/${wikiPath}`
  const dir = join(dist, slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(
    join(dir, 'index.html'),
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0;url=${target}">
  <link rel="canonical" href="${target}">
  <title>Redirecting to Wiki</title>
  <script>location.replace(${JSON.stringify(target)})</script>
</head>
<body>
  <p>Private docs — <a href="${target}">open Wiki ${wikiPath}</a> (Authentik).</p>
</body>
</html>
`,
  )
}

console.log('merged site -> dist/ (CNAME docs.fullstackboston.com + private wiki redirects)')
