import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FSB Docs',
  description: 'Public product documentation index (Full Stack Boston)',
  base: '/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  outDir: '../../dist/umbrella',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [{ text: 'Public docs', items: [{ text: 'Index', link: '/' }] }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Full-Stack-Boston/fsb-docs-publisher' },
    ],
  },
})
