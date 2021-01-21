性能优化 永远的大厂主题

- DOM 是贵的性能开销，没有之一

- 差点挂了？？
  10000 次？ 不会
  1. chrome tab 进程 都有一定的内存最高值

  2. 内存消耗在哪？
    document 性能开销
      JS 文档对象 JS 操作DOM


  两步
  1. 下载 html， css 浏览器在渲染页面的第一步
    - html DOM 树， 树的查询
    - css 解析执行 基于 DOM 树生成 css 渲染树 selector 属性构成
      Render tree  layout width
      height  margin padding
      position
      遍历这棵渲染树
      selector  node  css
      attribute 节点上的数据


      js 极其耗性能
      1. js 跟 java 比， 慢点
        c/c++/java  内存操作级别
        js  1/5   php python 脚本语言
        应用场景 js 是目前唯一可以做前端的语言
        node 后端， 移动端
      2. js 
          DOM 树 + css 渲染树
            1. 快速的把静态页面显示出来  第一要务
          js  第三者  动态DOM ajax
          document.getElementById('') 巨大的开销
          js (语言世界) -> html + css DOM 树世界
          