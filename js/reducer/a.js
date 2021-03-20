// let arr = [1, 2, 2, 3, 3, 4, 4, 5, 5, 8];

const { entries } = require("core-js/core/array");

// // reducer
// let sum = arr.reduce(reducer, [])

// function reducer(tol, cur) {
//   if (!tol.includes(cur)) {
//     tol.push(cur)
//   }
//   return tol;
// }

// console.log(sum);
// 从第二项开始 不传参的时候
// console.log([1, 2, 3, 4].reduce((acc,cur,index,o) => {
//   console.log(acc,cur,index,o);
//   return acc + cur;
// }))

const bills = [
  {
    type: 'shop',
    momey: 233
  },
  {
    type: 'study',
    money: 821
  },
  {
    type: 'shop',
    momey: 821
  },
  {
    type: 'transfer',
    momey: 821
  },
  {
    type: 'transfer',
    momey: 821
  }
]

// 按属性分类，二维

console.log(bills.reduce(reducer, {}));

function reducer(tol, cur) {
  if(!tol[cur.type]){
    tol[cur.type] = []
  }
  tol[cur.type].push(cur);
  return tol
}