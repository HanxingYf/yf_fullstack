// var isValid = function (s) {
//   let sta = [];

//   for (let ch of s) {
//     if (sta.length === 0) {
//       sta.push(ch);
//       continue;
//     }
//     if((sta[sta.length-1]==='('&&ch===')')||(sta[sta.length-1]==='['&&ch===']')||(sta[sta.length-1]==='{'&&ch==='}')){
//       sta.pop();
//       continue;
//     }
//     sta.push(ch);
//   }
//   return !sta.length;
// };

// let s = "()"
// console.log(isValid(s));

var s = []
var arr = s // arr 是对s 的引用，同一个内存位置
for (var i; i < 3; i++) {
  var pue = {
    value: 'item' + 1
  }, tem;
  if (i !== 2) {
    tem = []
    pue.children = tem;

  }
  arr.push(pue)
  arr = tem // arr 赋值为 []
}
// 
console.log(s);
