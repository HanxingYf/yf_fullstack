- es6 class 与 es5 构造函数 + prototype 有什么关系
    语法糖 那些？

- babel babel 的使命来啦
    es6 class 不停地更新， 每个版本， 意义
    老师：node 10 版本
    我：14 版本
    运行的环境不一样
    babel 负责
    js 的运行环境太复杂了， 不是单纯的chrom， IE， 360 等支持不同的版本，node 的不同版本怎么办？
    babel 解决这些， 写出来的

- 一线公司问？
  请问es6 class 关键字实现除了刚刚讲的， 有什么不一样的地方嘛？
  - ES6 class 构造函数construction 
    只能被 new， 不能作为普通函数执行
      - 如果要你去设计的话？怎么实现
  - Person.prototype  不可枚举
      Object.keys() // 可枚举
      Object.getOwnproperyNames()  可调用
  - ES6 还有 ES5 实现丰富的地方
      es6 里声明属性的时候有个高级写法
  - 手写一个babel 手写 es6 class 的转义代码
      babel 也是可以写出来的
  1. babel js 转义 帮助 es6 class -> es6 function