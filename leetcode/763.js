var partitionLabels = function(S) {
  let last = new Array(26);
  for(let index in S){
    let item = S[index];
    last[item.charCodeAt()-'a'.charCodeAt()] = index;
  }
  // console.log(last);
  let right = 0, left = 0;
  let res = [];
  for(let i = 0;i<S.length;i++){
    right = Math.max(right,last[S[i].charCodeAt()-'a'.charCodeAt()]);
    if(i == right){
      res.push(right-left+1);
      left = right+1;
    }
  }
  return res;
}

let S = "ababcbacadefegdehijhklij";
console.log(partitionLabels(S));;