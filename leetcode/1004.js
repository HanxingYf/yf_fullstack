var longestOnes = function (A, K) {
  let res = 0, cnt_0 = 0, left = 0;
  for (let right = 0; right < A.length; right++) {
    if (A[right] == 0) {
      cnt_0++;
    }
    while (cnt_0 > K) {
      if (A[left++] == 0) cnt_0--;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

let A = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], K = 2;
console.log(longestOnes(A, K));