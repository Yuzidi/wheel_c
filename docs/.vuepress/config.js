/*
 * @Author: your name
 * @Date: 2020-05-19 10:08:33
 * @LastEditTime: 2020-05-19 10:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\docs\.vuepress\config.js
 */ 
module.exports = {
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
        '/get-started/',
        ]
      },
      {
        title: '组件',
        children: ['/components/button']
      }
    ]
  }
}