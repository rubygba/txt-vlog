/*
 * @Date: 2023-07-05 22:51:55
 * @LastEditors: yaoweijian rubygba@foxmail.com
 * @LastEditTime: 2023-07-05 23:03:38
 * @FilePath: /txt-vlog/.vitepress/config.ts
 * @Description: koro desc
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vlog/',
  title: "GBA's visual knowledge logs",
  description: "logs notes about knowledge",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
