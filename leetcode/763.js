var partitionLabels = function(S) {
  let res = [];
  let map = new Map();
  for(let char of S){
    if(map.has(char)){
      map.set(char,map.get(char)+1);
    }
    else{
      map.set(char,1);
    }
  }
  // console.log(map);
  let cnt = 0;
  for(let i = 0;i<S.length;i++){
    if(map.get(S[i]) === 1){
      cnt++;
      res.push(cnt);
      cnt = 0;
    }
    else{
      cnt++;
      map.set(S[i],--map.get(S[i]));
    }
  }
};

let S = "ababcbacadefegdehijhklij";
partitionLabels(S);