import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Components Usa Docs',
  description: 'Public product documentation for Components Usa',
  base: '/components-usa/',
  cleanUrls: true,
  outDir: '../../dist/components-usa',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Components Usa',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
