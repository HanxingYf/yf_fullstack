let a = 1123456789156;

// 13
// 1,123,456,789,156
const huafen = (a) => {
  let s = a.toString();
  let res = '';
  let len = s.length;
  let cnt = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (cnt === 3) {
      res = ',' + res
      cnt = 0
    }
    else {
      res = s[i] + res;
      cnt++;
    }
  }
  return res;
}
console.log(huafen(a));