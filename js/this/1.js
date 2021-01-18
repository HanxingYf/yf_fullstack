// 'use strict';  // 启用严格模式
var obj = { // json object
  bar: 1,
  foo: function(){    // obj 属性
    console.log(this.bar);
  }
}

var foo = obj.foo;  // foo 函数
var bar = 2;
obj.foo();  // this 会指向 obj 本身， 函数调用的方式 运行环境|作用域
foo();  // this ?  普通函数 对象上的方法