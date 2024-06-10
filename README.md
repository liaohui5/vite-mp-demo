## 多页应用

1. 静态css资源打包 x (文件必须放在 styles 目录下/或者通过js导入)
2. js打包(包括通过 js 的 import 语法去导入 css 文件)

## 公共布局

利用 pug 手动实现类似 vue.js 组件化的功能(多页面,解决SPA的 SEO 效果差的问题)

- layouts/main.pug

  - link: 公共样式
  - script: 公共js
  - block: 定义块(在继承布局的时候可以使用)
  - variable: 定义变量(可以方便的实现多语言功能)

## 支持功能

- pug
- tailwindcss
- scss
