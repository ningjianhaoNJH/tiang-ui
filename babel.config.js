/*
 * @Author: 肖槿
 * @Date: 2021-12-27 18:40:52
 * @Description:babel配置
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 09:53:52
 * @FilePath: \tiang-ui\babel.config.js
 */
module.exports = {
  presets: [
    // babel的预设可以被看做是一组babel插件和/或options配置的共享模块
    '@vue/cli-plugin-babel/preset', // vue-cli插件
    [
      '@babel/typescript', // 用于typescript的预设
      {
        isTSX: true,
        allExtensions: true
      }
    ]
  ],
  plugins: ['@babel/transform-runtime'],
  env: {
    utils: {
      ignore: ['**/*.test.ts', '**/*.spec.ts'],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false
          }
        ]
      ]
    }
  }
}
