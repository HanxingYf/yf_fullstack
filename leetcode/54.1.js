var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
      return [];
  }
  const rows = matrix.length, columns = matrix[0].length;
  const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
  const total = rows * columns;
  const order = new Array(total).fill(0);

  let directionIndex = 0, row = 0, column = 0;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  for (let i = 0; i < total; i++) { 
      order[i] = matrix[row][column];
      visited[row][column] = true;
      const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
      if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
          directionIndex = (directionIndex + 1) % 4;
      }
      row += directions[directionIndex][0];
      column += directions[directionIndex][1];
  }
  return order;
};
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(matrix));
