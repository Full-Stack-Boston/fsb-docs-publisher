import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Fsb Splash Docs',
  description: 'Public product documentation for Fsb Splash',
  base: '/fsb-splash/',
  cleanUrls: true,
  outDir: '../../dist/fsb-splash',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Fsb Splash',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
