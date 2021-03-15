var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let vis = new Array(m).fill(0);
  for (let i = 0; i < m; i++) {
    vis[i] = new Array(n).fill(0);
  }
  let arr = [];
  let directionIndex = 0, row = 0, col = 0;
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  while (arr.length < m * n) {

    arr.push(matrix[row][col]);
    vis[row, col] = 1;
    let nextRow = row + directions[directionIndex][0];
    let nextCol = col + directions[directionIndex][1];

    if (!(0 <= nextRow && nextRow < m && 0 <= nextCol && nextCol < n && !(vis[nextRow][nextCol]))) {
      directionIndex = (directionIndex + 1) % 4;
  }

    row += directions[directionIndex][0];
    col += directions[directionIndex][1];
  }
  return arr;

};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(matrix));


