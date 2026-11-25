import { defineConfig } from 'vitepress'

// Custom domain docs.bonaloop.com uses base '/'.
export default defineConfig({
  title: 'Bonaloop Docs',
  description: 'Public product documentation for Bonaloop',
  base: '/',
  cleanUrls: true,
  outDir: '../../dist/bonaloop',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Product', link: '/product/' },
      { text: 'Hosts', link: '/hosts' },
    ],
    sidebar: [
      {
        text: 'Bonaloop',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Product surface', link: '/product/' },
          { text: 'Public hosts', link: '/hosts' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
