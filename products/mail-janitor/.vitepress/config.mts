import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Mail Janitor Docs',
  description: 'Public product documentation for Mail Janitor',
  base: '/mail-janitor/',
  cleanUrls: true,
  outDir: '../../dist/mail-janitor',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All docs', link: 'https://docs.fullstackboston.com/' },
    ],
    sidebar: [
      {
        text: 'Mail Janitor',
        items: [{ text: 'Overview', link: '/' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
