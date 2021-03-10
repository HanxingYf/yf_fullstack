var isValid = function (s) {
  let sta = [];

  for (let ch of s) {
    if (sta.length === 0) {
      sta.push(ch);
      continue;
    }
    if((sta[sta.length-1]==='('&&ch===')')||(sta[sta.length-1]==='['&&ch===']')||(sta[sta.length-1]==='{'&&ch==='}')){
      sta.pop();
      continue;
    }
    sta.push(ch);
  }
  return !sta.length;
};

let s = "()"
console.log(isValid(s));