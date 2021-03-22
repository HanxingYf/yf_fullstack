
var hammingWeight = function (n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
      if ((n & (1 << i)) !== 0) {
          ret++;
      }
  }
  return ret;
}

let n = 00000000000000000000000000001011;
let a = 12, b = 5;

// console.log(a.toString(2), b.toString(2), a & b);
console.log(hammingWeight(n));