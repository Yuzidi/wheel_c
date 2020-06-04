/*
 * @Author: your name
 * @Date: 2020-05-19 10:08:33
 * @LastEditTime: 2020-05-19 10:14:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wheel_c\docs\.vuepress\config.js
 */ 
module.exports = {
  base: '/wheel_c/',
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  extraWatchFiles:[
    'components/button.md'
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/install/' },
      { text: 'components', link: '/components/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button.md',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/popover',
          '/components/slides',
        ]
      }
    ]
  }
}