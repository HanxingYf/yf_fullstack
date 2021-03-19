var spiralOrder = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }
  let m = matrix.length;
  let n = matrix[0].length;
  let top = 0, left = 0;
  let bottom = m - 1, right = n - 1;
  let arr = [];
  while (arr.length < m * n) {
    for (let i = left; i <= right; i++) {
      arr.push(matrix[top][i])
    }
    for (let i = top + 1; i <= bottom; i++) {
      arr.push(matrix[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        arr.push(matrix[bottom][i]);
      }
      for (let i = bottom - 1; i > top; i--) {
        arr.push(matrix[i][left])
      }
    }
    top++;
    bottom--;
    left++;
    right--;
  }
  return arr;
};

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix));