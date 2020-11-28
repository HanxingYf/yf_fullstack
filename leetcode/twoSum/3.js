const numbers = [3, 62, 243, 7, 23, 74, 23, 76, 92];
const arr = [];
// const largeNUmbers = numbers.forEach((e, i) => {
//     if(e > 70){
//         arr.push(e);
//     }
// })
// forEach 基础上
// filter内置函数
const cb = number => number > 70    //cb是函数
// const cb = number => {
//     return number > 70;
// }
const largeNUmbers = numbers.filter(cb);
console.log(largeNUmbers);