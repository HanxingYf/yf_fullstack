var getRow = function (rowIndex) {
  let C = new Array(rowIndex + 1).fill(0);
  for (let i = 0; i <= rowIndex; i++) {
    C[i] = new Array(i + 1).fill(0);
    C[i][0] = C[i][i] = 1;
    for (let j = 1; j < i; j++) {
      C[i][j] = C[i - 1][j] + C[i - 1][j - 1];
    }
  }
  return C[rowIndex];
};

rowIndex = 3;
console.log(getRow(rowIndex));