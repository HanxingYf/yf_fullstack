var uniquePaths = function (m, n) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = 1
  }

  for (let i = 1; i < m; i++) {
    // 第 i 行第 0 列的初始值
    dp[0] = 1;
      for (let j = 1; j < n; j++) {
          dp[j] = dp[j-1] + dp[j];
      }
  }

  return dp[n - 1]
};


m = 3, n = 7;
console.log(uniquePaths(m, n));