import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sprucer Docs',
  description: 'Public product documentation for Sprucer',
  base: '/sprucer/',
  cleanUrls: true,
  outDir: '../../dist/sprucer',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Sprucer',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
