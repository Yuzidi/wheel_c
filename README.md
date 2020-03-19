# wheel_c

作者 lijuan cheng

## 介绍

这是学习Vue时做的一个UI框架.

## 开始使用

1. 添加css样式

    使用本框架前, 请在css中开启border-box
    ```
    *, *::before, *::after {box-sizing: border-box}
    ```
    IE 8 及以上浏览器都支持此样式

    你还需设置默认颜色等变量(后续会修改为 scss 变量)
    ```
    :root/html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE 15 及以上浏览器都支持此样式
2. 安装 gulu
    ```
    npm i --save wheel_c-0-0-1
    ```
3. 引入 gulu
    ```
    import {Button} from 'wheel_c-0-0-1'
    import 'wheel_c-0-0-1/dist/index.css'

    export default {
      name: 'App',
      components: {
        "g-button":Button,
      }
    }
    ```
4. 引入 svg symbols
    ```
    <script src="//at.alicdn.com/t/font_1694322_ejpw0j3z7uf.js"></script>
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码