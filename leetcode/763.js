var partitionLabels = function(S) {
  let last = new Array(26);
  for(let item of S){
    console.log(item);
    console.log(charCodeAt(item));
  }
};

let S = "ababcbacadefegdehijhklij";
partitionLabels(S);