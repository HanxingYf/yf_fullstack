function getBigger(b1, b2) {
  // b1的版本号
  let num_b1 = Number(b1.split('.').join(''));
  // console.log(typeof num_b1);
  // b2的版本号
  let num_b2 = Number(b2.split('.').join(''));
  
  return Math.max(num_b1,num_b2);
}

let b1 = '1.2.3';
let b2 = '1.2.4';
console.log(getBigger(b1,b2));
// 1.2.a
// 1.2.b

