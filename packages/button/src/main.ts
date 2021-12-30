/*
 * @Author: 肖槿
 * @Date: 2021-12-29 14:00:39
 * @Description:
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-30 13:36:11
 * @FilePath: \tiang-ui\packages\button\src\main.ts
 */
import { App } from 'vue'
import Button from './Index.vue'
import 'element-ui/lib/theme-chalk/base.css'
Button.install = (app: App): void => {
  app.component(Button.name, Button)
}

export default Button
