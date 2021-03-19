const EventEmitter = require('events').EventEmitter;  // 事件模块

// 网站就是一个订阅发布者模式

// 发布事件
class tecenttime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('newlesson', {
        price: Math.random() * 100
      }) // 触发事件
    }, 2000)
  }
}

module.exports = new tecenttime;