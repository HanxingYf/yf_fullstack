function getConsectiveItems(items, key){
  items = items.toString();
  key = key.toString();
  let max = 0;
  let cnt = 0;
  for(let i = 0;i<items.length;i++){
    if(items[i] === key){
      cnt++;
      if(cnt>max) max = cnt;
    }else{
      cnt = 0;
    }
  }
  return max;
}

let items = 70180646775;
let key = 1;
console.log(getConsectiveItems(items, key));