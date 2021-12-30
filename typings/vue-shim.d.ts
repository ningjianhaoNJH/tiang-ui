/*
 * @Author: 肖槿
 * @Date: 2021-12-29 14:12:05
 * @Description:全局导入
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 17:42:04
 * @FilePath: \tiang-ui\typings\vue-shim.d.ts
 */
declare module '*.vue' {
  import { App, defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent> & {
    // ReturnType:获取返回值中typeof为defineCompoent的类型
    install(app: App): void
  }
  export default component
}
declare type Nullable<T> = T | null // 全局type，除了T就是null
declare type CustomizedHTMLElement<T> = HTMLElement & T // 全局type，交叉类型是T又是HTMLElement
declare type Indexable<T> = {
  [key: string]: T
}
declare type Hash<T> = Indexable<T>
// 定时器类型
declare type TimeoutHandle = ReturnType<typeof global.setTimeout>
declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
declare module 'lodash'
