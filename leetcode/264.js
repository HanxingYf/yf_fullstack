var nthUglyNumber = function (n) {
  let cnt = 0;
  if (n < 4) {
    return n;
  }
  else {
    let i;
    for (i = 4; cnt < n - 3; i++) {
      if (isUgly(i)) {
        console.log(i, '--');
        cnt++;
      }
    }
    return i;
  }


  function isUgly(m) {
    for (let j = 4  ; j < m / 2; j++) {
      if (j != 2 && j != 3 && j != 5 || m % j == 0) {
        return false
      }
    }
    return true;
  }
};

console.log(nthUglyNumber(10));