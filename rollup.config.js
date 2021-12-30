/*
 * @Author: 肖槿
 * @Date: 2021-12-24 18:38:43
 * @Description: rollup配置
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-30 13:35:39
 * @FilePath: \tiang-ui\rollup.config.js
 */
import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import vue from '@vitejs/plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve' // rollup无法识别node_modules中的包，帮助rollup查找外部模块，然后倒入
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs' // 将commonjs模块转换为es6供rollup处理
import { DEFAULT_EXTENSIONS } from '@babel/core'

const isDev = process.env.NODE_ENV !== 'production'
const root = path.resolve(__dirname, 'packages') // packages文件夹路径

// 公共插件配置
const getPulgins = () => {
  return [
    vue(),
    typescript({
      tsconfig: './tsconfig.json'
    }),
    nodeResolve({
      mainField: ['jsnext:main', 'browser', 'module', 'main'],
      browser: true // 一些package.json文件中有browser字段它指定为浏览器绑定的人员加载的替代文件，
    }),
    commonjs(),
    json(),
    postcss({
      plugins: [require('autoprefixer')],
      inject: true, // 把css插入到style中
      minimize: !isDev, // 最小化 CSS、布尔值或 cssnano 选项
      // extract: true, // 把css放到和js同一目录中
      sourceMap: isDev, // 启用map
      extensions: ['.sass', '.less', '.scss', '.css'] // 作用文件格式
    }),
    babel({
      exclude: 'node_modules/**', // 不包含依赖中的文件
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, '.tsx'] // 作用什么文件
    }),
    !isDev && terser({ toplevel: true }) // 代码压缩
  ]
}
module.exports = fs
  .readdirSync(root)
  // 过滤，之保留文件夹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'src/main.ts'),
      output: [
        {
          name: 'index',
          file: path.resolve(root, item, pkg.main),
          format: 'umd',
          sourcemap: isDev,
          globals: {
            vue: 'vue',
            'element-ui': 'element-ui'
          }
        },
        {
          name: 'index.module',
          file: path.join(root, item, pkg.module),
          format: 'es',
          sourcemap: isDev,
          globals: {
            vue: 'vue',
            'element-ui': 'element-ui'
          }
        }
      ],
      onwarn: function (warning) {
        if (warning.code === 'THIS_IS_UNDEFINED' || warning.code === 'CIRCULAR_DEPENDENCY') {
          return
        }
        console.error(`(!)${warning.message}`)
      },
      plugins: getPulgins(),
      external: Object.keys(require(path.join(root, item, 'package.json'))?.peerDependencies || {})
    }
  })
