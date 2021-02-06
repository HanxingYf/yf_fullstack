var maxScore = function (cardPoints, k) {
  let sum = 0;
  let len = cardPoints.length;
  for (let i = 0; i < len; i++) {
    sum += cardPoints[i];
  }
  let r = 0, l = r + len - 1;
  while(l<len){
    let temp = 
  }
  return sum;
};

let cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3;
console.log(maxScore(cardPoints, k));