// var isValid = function (s) {
//   if (s == null || s.length < 1) {
//     return true
//   }
//   let sum = 0;
//   for (let ch of s) {
//     console.log(ch);
//     if (ch == '(') sum++
//     else {
//       if (sum == 0) return false
//       else sum--;
//     }
//   }
//   return sum == 0 ? true : false;
// };

// let s = "[[[]]]"
// console.log(isValid(s));