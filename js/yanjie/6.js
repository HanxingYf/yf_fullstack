function duplicateCount(text){
  let str = text.toLowerCase().split('').sort().join('');
  // console.log(str);
  let word = '123-4560-666';
  // 正则，判断一个字符串是否符合规则
  // console.log(word.match(/\d+/g));
  // console.log(/\d+/.test(word));
  let arr = str.match(/(.)\1+/g);
  console.log(arr);
}
duplicateCount('aaaaadsdjfwuhh');