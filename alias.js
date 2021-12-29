/*
 * @Author: 肖槿
 * @Date: 2021-12-27 18:34:53
 * @Description:alias
 * @LastEditors: 肖槿
 * @LastEditTime: 2021-12-27 18:40:03
 * @FilePath: \tiang-ui\alias.js
 */
const { readdirSync } = require("fs");
const { join } = require("path");
const chalk = require("chalk");
const headPkgList = []; // 非tiang-ui开头的组件
const pkgList = readdirSync(join(__dirname, "./packages")).filter(
  (pkg) => pkg.charAt(0) !== "." && !headPkgList.includes(pkg)
);
const alias = pkgList.reduce((pre, pkg) => {
  pre[`@tiang-ui/${pkg}`] = join(__dirname, "./packages", pkg, "src/Index.vue");
  return {
    ...pre,
  };
}, {});
console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join("\n"))}`);
module.exports = alias;
