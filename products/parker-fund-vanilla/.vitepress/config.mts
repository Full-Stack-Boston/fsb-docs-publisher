import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Parker Fund Vanilla Docs',
  description: 'Public product documentation for Parker Fund Vanilla',
  base: '/parker-fund-vanilla/',
  cleanUrls: true,
  outDir: '../../dist/parker-fund-vanilla',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Parker Fund Vanilla',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
