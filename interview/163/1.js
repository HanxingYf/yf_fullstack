// // symbol
// // es6 引入的新的原始数据类型Symbol， 表示独一无二的值
// // var sym1 = Symbol();
// // var sym2 = Symbol('foo');
// // var sym3 = Symbol('foo');
// // console.log(sym2 == sym3);

// // 1. 函数来创建  原始数据类型 冲突的地方？ 如何说明 函数用法上有什么区别
// // new Symbol() Symbol is not a constructor
// // 变量都是要分配内存空间的，原始数据类型 栈分配  引用类型 堆分配
// // 2. Symbol 有何用？
// // Symbol(字符串) 有何用？ 做一个标识
// // console.log(sym3.toString());
// var mySymbol = Symbol() // 初始化
// var shapetype = {
//   // triangle: 'Triangle',
//   triangle:Symbol(),
//   // square: 'Square'
//   square:Symbol()
// }

// function getArea(shape, options) {
//   var area = 0;
//   switch (shape) {
//     case shapetype.triangle:
//       area = 0.5 * options.width * options.height;
//       break;
//     case shapetype.square:
//       area = options.width * options.height
//   }
//   console.log(getArea(shapeType.triangle, {
//     width: 100,
//     height: 100
//   }));
//   return area
// }

// var s1 = Symbol('foo');
// console.log(s1 instanceof Symbol);  // 原始数据类型

// const obj = {
//   toString(){
//     return 'av'
//   }
// }
// const sym = Symbol(obj)

// console.log(sym.toString());

// var sym2  =Symbol("my symbol");
// console.log("you" + sym2); // symbol 不允许 +

// symbol 可以用于 json key 表示唯一
var obj = {};
var a = Symbol("a");
var b = Symbol("b");

obj[a] = 'hello';
obj[b] = 'world';
obj.cc = 'cccc';
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[a]);

for (let key in obj) {
  console.log(obj[key]);
}

Object.getOwnPropertySymbols(obj).forEach(item => {
  console.log(obj[item]);
})