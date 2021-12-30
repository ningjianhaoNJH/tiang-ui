/*
 * @Author: 肖槿
 * @Date: 2021-12-24 16:24:29
 * @Description:
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 19:08:19
 * @FilePath: \tiang-ui\docs\.vuepress\config.js
 */
const alias = require('../../alias')
module.exports = {
  title: 'tiang-ui',
  alias,
  base: '/tiang-ui/',
  bundler: '@vuepress/vite',
  description: '天鸽后台专属ui',
  plugins: ['demoblock-plus'],
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  }
}
