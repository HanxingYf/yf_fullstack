/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function (m, n, k) {
  let row = 0, col = 0;   // 机器人位置坐标
  let res = 0;    // result
  let flag = new Array(m).fill(0).map((item) => {
      return new Array(n).fill(0);
  })
  dfs(row, col, m, n);
  // console.log(flag);
  return res;

  function dfs(row, col, m, n) {
      if (row == m || col == n || flag[row][col]) {
          return;
      }
      if(!isValid(row,col)){
          return
      }
      flag[row][col] = 1;
      res++
      dfs(row + 1, col, m, n);
      dfs(row, col + 1, m, n);
  }
  function isValid(row, col) {
      let reducer = function add(sum, item) {
          return sum + item
      }
      let x = row.toString().split('').map((item) => parseInt(item)).reduce(reducer, 0)
      let y = col.toString().split('').map((item) => parseInt(item)).reduce(reducer, 0)
      return x + y <= k
  }
};
