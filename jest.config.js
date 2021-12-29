/*
 * @Author: 肖槿
 * @Date: 2021-12-29 09:51:17
 * @Description:测试配置
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-29 09:53:36
 * @FilePath: \tiang-ui\jest.config.js
 */
const alias = require('./alias')

module.exports = {
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(t|j)sx?$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true
              }
            }
          ],
          [
            '@babel/preset-typescript',
            {
              isTSX: true,
              allExtensions: true
            }
          ]
        ]
      }
    ]
  },
  moduleNameMapper: alias,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  // u can change this option to a more specific folder for test single component or util when dev
  // for example, ['<rootDir>/packages/input']
  roots: ['<rootDir>']
}
