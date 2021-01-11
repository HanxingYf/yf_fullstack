function autocomplete(input, dictionary) {
  let cnt = 0;
  let res = [];
  for (let it of dictionary) {
    it = f(it);
    if (it.toLowerCase().indexOf(input) === 0) {
      if (cnt <= 5) {
        res.push(it);
        cnt++;
      }
    }
  }
  return res;
}
function f(it){
  let res = '';
  for(let i of it){
    if(i>='a'&&i<='z'||i>='A'&&i<='Z'){
      res += i;
    }
  }
  return res;
}

let input = 'aiasfefs2312eg';
let dictionary = ['AIrplane','airport','apple','ball'];
// console.log(f(input));
// console.log(autocomplete(input, dictionary));
// console.log(input.indexOf('aias'));


// function a(text){
//   let str = text.toLowerCase().split('').sort().join();
//   console.log(str);
//   let arr = str.match('/(-)\1+/g');
//   console.log(arr);
// }

// a('aadsdjfwujj');