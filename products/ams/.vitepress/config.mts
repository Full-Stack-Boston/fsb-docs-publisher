import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ams Docs',
  description: 'Public product documentation for Ams',
  base: '/ams/',
  cleanUrls: true,
  outDir: '../../dist/ams',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Ams',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
