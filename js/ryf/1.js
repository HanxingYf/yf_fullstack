// 函数 对象
// js 类型
let a;  // 声明变量 undefined 类型未定义
const b = 'hello'   // 常量声明时必须赋值，且不可改变
const arr = [1,2,3];
console.log(typeof arr); //obiect
const obj = 
console.log(typeof a);
a = 1;
console.log(typeof a);

function Cart(){
    this.type = '折耳';
}

Cart.prototype.sayHello = function() {
    console.log('喵');
}
let list = [1,2,3];
console.log(typeof list[0]);