// // let a = '01100001';
// // console.log(String.fromCharCode(parseInt(a,2)));

// function binaryToString(binary) {
//   // console.log(binary.length);
//   let fl = 0;
//   let list = [];
//   while(fl != binary.length){
//     list.push(binary.substr(fl,8));
//     fl = fl + 8;
    
//   }
//   // console.log(list);
//   let res = '';
//   for(let item of list){
//     res += String.fromCharCode(parseInt(item,2));
//   }
//   return res;
// }
// let binary = '01100001';
// console.log(binaryToString(binary));
// // console.log(binary.length);



function beggars(values, n){
  //your code here
  let len  = values.length;
  let flag = new Array(len).fill(1);
  // console.log(flag);
  let res = [];
  if(n == 0)  return res;
  if(n > len){
    let add = new Array(n-len).fill(0);
    res = [...values,...add];
    return res;
  }
  while(res.length<n){
    console.log('a');
    let sum = 0;
    let index = 0;
    while(flag[index] != 1){
      index++;
    }
    while(flag[index] == 1 && index < len){
      flag[index] = 0;
      sum+=values[index];
      index += n;
      
      console.log(index);
    }
    res.push(sum);
    console.log(res.length,n);
  }
  return res;
}

let values = [1,2,3,4,5];
let n = 6;
console.log(beggars(values, n));