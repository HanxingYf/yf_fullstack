var exist = function (board, word) {
  if (arr.length == word.length) {
    return true;
  }
};

let a = 1;

let arr = [];
let board =
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ];
let flag = new Array(board.length).fill(0);
for (let i = 0; i < board.length; i++) {
  flag[i] = new Array(board[0].length).fill(0);
}
// console.log(flag);
let word = "ABCCED";
console.log(exist(board, word));