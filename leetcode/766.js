var isToeplitzMatrix = function (matrix) {
  let n = matrix.length;  // 行
  let m = matrix[0].length; // 列
  let flag = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i + 1 < n && j + 1 < m && matrix[i][j] != matrix[i + 1][j + 1]) {
        flag = false;
      }
    }
  }
  return flag;
};

let matrix = [[1,2],[2,2]];
console.log(isToeplitzMatrix(matrix));