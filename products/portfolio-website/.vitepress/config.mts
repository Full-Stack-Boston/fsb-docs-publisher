import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Portfolio Website Docs',
  description: 'Public product documentation for Portfolio Website',
  base: '/portfolio-website/',
  cleanUrls: true,
  outDir: '../../dist/portfolio-website',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Portfolio Website',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
