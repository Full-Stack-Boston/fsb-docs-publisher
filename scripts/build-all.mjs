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
console.log('merged site -> dist/ (CNAME docs.fullstackboston.com)')
