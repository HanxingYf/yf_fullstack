let data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
let str = data.join('');
let len = str.length;
let cnt = len/8;
// console.log(cnt);
// console.log(typeof str);
let list = [];
for(let i = 0;i < cnt; i++){
  if(i === 0){
    list.unshift(str.substr(0,8));
  }else{
    list.unshift(str.substr(i*8,8))
  }
  // return list.join('');
}
console.log(list.join('').split('').map(item => parseInt(item)));
// 0,7,15,23
// console.log(str.substr(0,8),str);
