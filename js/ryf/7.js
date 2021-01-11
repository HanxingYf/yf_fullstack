function Animal(){
  this.species = '动物';
}
// Animal -> Function 
// 函数是一等对象
// 拿到函数的原型链上的方法， 靠它
console.log(Animal.__proto__.__proto__);