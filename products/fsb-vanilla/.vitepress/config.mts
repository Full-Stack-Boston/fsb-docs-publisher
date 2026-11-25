import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fsb Vanilla Docs',
  description: 'Public product documentation for Fsb Vanilla',
  base: '/fsb-vanilla/',
  cleanUrls: true,
  outDir: '../../dist/fsb-vanilla',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Fsb Vanilla',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
