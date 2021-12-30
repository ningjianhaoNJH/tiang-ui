/*
 * @Author: 肖槿
 * @Date: 2021-12-29 13:26:36
 * @Description:全局注册组件，plop在自动新增组件的时候注入，不需要手动添加
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 19:07:38
 * @FilePath: \tiang-ui\docs\.vuepress\clientAppEnhance.ts
 */
import { defineClientAppEnhance } from '@vuepress/client'
import 'element-ui/lib/theme-chalk/index.css'
// -- 导入文件在这加 --
import TiangButton from '@tiang-ui/button'
export default defineClientAppEnhance(({ app }) => {
  // -- 全局组件在这加 --
  app.component('TiangButton', TiangButton)
})
