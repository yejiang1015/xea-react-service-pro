# xea-react-service-pro

[@xea/react-service](https://github.com/yejiang1015/xea-react-service)

`xea-react-service-pro` 是一个公开的、面向企业级、基于antd、react、typescript、等技术栈的后台管理系统方向的项目。旨在探索 `react`、 `mobox`、 `typescript`、 `hooks组件 和 类组件`、 协同下的最佳开发实践。

## 为什么用 `mobox` 而不是 `redux` 
TODO:

## ts-node 运行webpack 和 node 运行webpack的区别
TODO:

## 项目所涉及技术面
TODO:
1. `React`
1. `React Hooks`
1. `React Router`
1. `Mobx`
1. `Typescript`
1. `Fetch`
1. `antd`
1. `postcss`
1. `css module`
1. `css BEM 命名方式`

1. `webpack 4.x`
1. `webpack-chain`
1. `eslint 6.x`
1. `prettier`
1. `babel (@babel/preset-typescript)`
1. `husky + lint-staged`
1. `node`
1. `ts-node`
1. `路由鉴权`、`接口鉴权`
1. `前后端分离`

## `vue3` 和 `react` 技术栈如何选择
TODO:


## 核心思想方向 和 探索最佳开发实践方向
TODO:
1. 异步接口获取方式 - 使用 `mobox` 全权接管请求层，`react` 只负责触发 `mobx` 去请求和渲染页面 功能分离。不在 `react` 中显式的发起 `Http` 请求。
1. 路由配置要预留可扩展位置。如首页不渲染页面。重定向到一个指定的页面。后续扩展首页可直接更改重定向到另一个路由地址。
1. 代码commit 校验ts和es。
1. 根路由组件使用 类组件。页面功能组件使用 `Hooks组件` 和 `类 Class` 组件。理由：TODO:

## 项目本地预览
TODO:

## `yarn`, `npm`, `cnpm` 探讨
TODO:

## 联系作者
`...`

## 更多项目

1. `nwjs` 桌面应用程序的正确开发姿势(敬请期待!)