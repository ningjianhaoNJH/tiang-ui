/*
 * @Author: 肖槿
 * @Date: 2021-12-29 09:56:07
 * @Description:plop工具，可以使用命令生产模板文件
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 11:05:49
 * @FilePath: \tiang-ui\plopfile.js
 */
module.exports = plop => {
  plop.setHelper('hump', function (text) {
    return text.replace(text[0], text[0].toUpperCase())
  })
  plop.setGenerator('component', {
    description: '生成组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名？'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/__tests__/{{name}}.spec.ts',
        templateFile: 'templates/__tests__/index.spec.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/main.ts',
        templateFile: 'templates/src/main.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/.gitignore',
        templateFile: 'templates/.gitignore'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/src/Index.vue',
        templateFile: 'templates/src/Index.vue'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/README.md',
        templateFile: 'templates/README.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{name}}/typings/tiang-ui.d.ts',
        templateFile: 'templates/typings/tiang-ui.d.ts'
      },
      {
        type: 'append',
        path: 'docs/.vuepress/clientAppEnhance.ts',
        pattern: /(\/\/ -- APPSTART ITEMS HERE --)/gi,
        template: "import Tiang{{hump name}} from '@tiang-ui/{{name}}'"
      },
      {
        type: 'append',
        path: 'docs/.vuepress/clientAppEnhance.ts',
        pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
        template: "app.component('Tiang{{hump name}}', Tiang{{hump name}})"
      }
    ]
  })
}
