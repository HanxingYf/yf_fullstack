
var numEquivDominoPairs = function (dominoes) {
  for (let arr of dominoes) {
    arr.sort();
  }
  let res = 0;
  let flag = new Array(dominoes.length).fill(0);
  for (let i = 0; i < dominoes.length && flag[i] == 0; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      // console.log(dominoes[i], dominoes[j]);
      if (dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1]) {
        res++;
      }
    }
  }
  return res;
  // console.log(dominoes);
};

let dominoes = [[1, 2], [2, 1], [3, 4], [5, 6]];
console.log(numEquivDominoPairs(dominoes));