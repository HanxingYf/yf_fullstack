var moveZeros = function (arr) {
  // TODO: Program me
  let arr1 = [], arr2 = [];
  for(let item of arr){
    if(item === 0){
      arr2.push(item);
    }
    else{
      arr1.push(item);
    }
  }
  return [...arr1, ...arr2];
}

let arr = [false,1,0,1,2,0,1,3,"a"];
console.log(moveZeros(arr));