function duplicateCount(word){
  // Map JSONObject
  let map = new Map();  // es6 提供的数据结构 HashMap
  let cnt = 0;
  for(let i of word){
    if(map.has(i)){
      map.set(i,map.get(i)+1);
      cnt++;
    }
    else{
      map.set(i,1);
    }
  }
  console.log(map);
}

duplicateCount('aadsdjfwuhhhhhhh');