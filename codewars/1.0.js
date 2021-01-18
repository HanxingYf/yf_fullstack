function titleCase(title, minorWords) {
  let Min_min = minorWords.toLowerCase();
  // console.log(Min_min);
  // console.log(Min_min.indexOf('an'));
  let title_list = title.split(' ');  // title 转为数组
  // console.log(title_list);
  let res = [];
  for(let index in title_list){
    // 第一个单词
    if(index == 0){
      // console.log(title[index]);
      let temp = title_list[index].toLowerCase();
      res.push(temp.charAt(0).toUpperCase() + temp.slice(1))
    }
    else{
      let temp = title_list[index].toLowerCase();
      if(Min_min.indexOf(temp) != -1){  // 在minorWord 里面
        res.push(temp);
      }
      else{
        res.push(temp.charAt(0).toUpperCase() + temp.slice(1))
      }
    }
  }
  return res.join(' ');
}

let title = 'the quick brown fox';
let minorWords = '';
console.log(titleCase(title,minorWords));