# react 实战

react 全家桶 + 前端

react + koa 全栈

定时应用
setInterval js es5
->

react state setState data 响应式
redux mobx

state -> 可以被观察的对象 observeable
界面更新 单向绑定
组件内的表达 自身的状态 -> 响应式
数据 父组件 -> 传递给子组件

redux 如果是没有关系的组件 共享数据和状态怎么办

1. 专业的数据流管理 redux mobx
2. 正规的流程 绝对不会出问题
action
reducer -> 纯函数

store 中央仓库
local -> 中央
new Store 做公司，请了一个财务


# mbox 更简单的数据流管理
1. observerable 观察（组件） 与被观察（有状态的实例）
2. store Provider 


- url 发生了什么

- 1. url 设计
  /articles
  /articles/:id

- 2. react-router-dom
  router 配置 前端路由 SPA

- 3. mobx 数据管理
  provider Store  做一个分支 Article
  mobx observeable @action getArticles  getArticleById

- 4. API
  后端 URL 在哪里？

- 5. Article相关组件 @observe store
  componentDidMount



路由有多个模块
/users  /articles /goods
数据状态收到中央 什么状态都放在一个Store实例里

仓库只有一个
<Provider store={store}>
</Provider>

多模块


1. 前端启动路由
  <App />外面包一层 HashRouter HistoryRouter SPA
  :3000/#/  hashRouter
  :3000/    historyRouter