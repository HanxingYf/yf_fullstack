
var findMaxForm = function (strs, m, n) {
  let dp = new Array(m + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  for (let str of strs) {
    let oneNum = 0, zeroNum = 0;
    for (let s of str) {
      if (s == '0') zeroNum++;
      else oneNum++;
    }
    for (let i = m; i > zeroNum; i--) {
      for (let j = n; j > oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1);
      }
    }
  }
  return dp[m][n]
};

strs = ["10","0001","111001","1","0"], m = 5, n = 3
console.log(findMaxForm(strs, m, n));