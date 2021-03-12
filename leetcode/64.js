var minPathSum = function (grid) {
  n = grid.length;
  m = grid[0].length;
  // console.log(n,m);
  let dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0);
  }
  // console.log(dp);
  // console.log(grid);
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < n; i++) {
    // console.log(grid[i][0]);
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // console.log(dp);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
    }
  }
  return dp[n-1][m-1];
};

grid = [[1,2,3],[4,5,6]]
console.log(minPathSum(grid));