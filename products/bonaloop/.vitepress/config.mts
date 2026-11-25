import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bonaloop Docs',
  description: 'Public product documentation for Bonaloop',
  base: '/bonaloop/',
  cleanUrls: true,
  outDir: '../../dist/bonaloop',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Bonaloop',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
