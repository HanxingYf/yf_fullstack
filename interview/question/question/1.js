// let a = [1,2,3];
// // console.log(a.shift());
// // && 与 
// a.join = a.shift; // 其中一种 
// 对象 类型转化  1 2  3
const a = {
  value: [3,2,1],
  valueOf: function() { return this.value.pop()}
}
console.log(a == 1 && a == 2 && a == 3) // true