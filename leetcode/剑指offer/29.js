var spiralOrder = function (matrix) {
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let arr = [];
  if(matrix.length===0||matrix[0].length===0){
    return []
  }
  let m = matrix.length;
  let n = matrix[0].length;
  let vis = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // console.log(vis);

  let row = 0, col = 0, direction = 0;

  while (arr.length < m * n) {
    arr.push(matrix[row][col]);
    vis[row][col] = 1;
    let nextrow = row + directions[direction][0];
    let nextcol = col + directions[direction][1];

    // console.log(nextrow,nextcol);

    if (nextrow < 0 || nextrow >= m || nextcol < 0 || nextcol >= n || vis[nextrow][nextcol] === 1) {
      direction = (direction + 1) % 4
    }

    row += directions[direction][0];
    col += directions[direction][1];
  }

  return arr;
  // while (arr.length < m * n) {

  // }
};

let matrix = [[1]];
console.log(spiralOrder(matrix));