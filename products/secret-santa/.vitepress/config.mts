import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Secret Santa Docs',
  description: 'Public product documentation for Secret Santa',
  base: '/secret-santa/',
  cleanUrls: true,
  outDir: '../../dist/secret-santa',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Secret Santa',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
