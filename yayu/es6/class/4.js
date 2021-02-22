// 读懂源码
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
  }
}
var _createClass = (function() {
  // 模块化， 闭包
  // 传统的es5 没有模块化， 比较弱 
  function defineProperties(target, props) {
      console.log(target, props);
      for (var i = 0; i < props.length; i++) {
          // console.log(props[i], '-------');
          var descriptor = props[i]; // es6  高光时刻到来 
          descriptor.enumerable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
          // console.log(descriptor);
          // Object.defineProperties(target, descriptor.key, descriptor) // prototype 对象， 
      }
  }
  // 给类添加方法？ 
  // protoProps enum 做点事情 ? 
  return function(Constructor, protoProps) {
      console.log(Constructor, protoProps);
      if (protoProps) { // 如果有添加在原型链上的方法 
          // 封装 es6 如何定义属性？ defineProperty 方法？ 
          defineProperties(Constructor.prototype, protoProps); // 把一件事情交出去 
      }
  }
})()

var Person = (function() { // 立即执行函数
  //闭包
  // class  方法不可以被enum  
  function Person(name) {
      _classCallCheck(this, Person);
      this.name = name;
  }
  // 添加一个模块 enum prototype 属 封装 
  _createClass(Person, [{
          key: 'sayHello',
          value: function sayHello() {
              return 'hello, I am ' + this.name
          }
  }])
  return Person;

})()
console.log(Person);

var person = new Person("ysw");
console.log(Object.keys(Person.prototype))
console.log(Object.getOwnPropertyNames(Person.prototype));
