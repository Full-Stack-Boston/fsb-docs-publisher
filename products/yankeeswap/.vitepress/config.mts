import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Yankeeswap Docs',
  description: 'Public product documentation for Yankeeswap',
  base: '/yankeeswap/',
  cleanUrls: true,
  outDir: '../../dist/yankeeswap',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Yankeeswap',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
