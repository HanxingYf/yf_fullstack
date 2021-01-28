# react 小书

- 简单应用， 只是一个功能， 不是一个完整的上线应 用 website 不需要router
  react 是现在最流行的 web 网站应用开发框架

- 组件组织起来
  1. CommentApp 根组件 index.js render
  2. 子组件   Comment 
  3. 数据放在父组件中， 通过 prop 一路传下去
    comments 放在 CommentApp 里的主要原因是 CommentList 需要push 
  4. 每个组件有专属的 css 方便 css 的管理
    组件卸载的时候， 方便 css 移除 干净
  5. 子组件要通知父组件 有事情怎么办？
    父组件将函数通过 props 方式 传给子组件，告知子组件通过这个方法来通知父组件