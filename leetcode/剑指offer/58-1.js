var reverseWords = function (s) {
  // 去除首尾空格
  function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g,"")
  }
  // 合并空格
  function reset(str){
    return str.replace(/\s+/g,' ')
  }
  s = trim(s)
  s = reset(s);
  // console.log(s);
  let arr = s.split(' ');
  // console.log(arr);
  let len = arr.length;
  let res = [];
  for (let i = len - 1; i >= 0; i--) {
    // console.log(arr[i]);
    res.push(arr[i]);
  }
  return res.join(' ');
};




let s = "a good   example"
console.log(reverseWords(s));