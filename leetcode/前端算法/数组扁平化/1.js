var arr = [1, [2, [3, 4]]];

function flatten(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }else{
      result.push(arr[i]);
    }
  }
  return result;
}