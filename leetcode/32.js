var longestValidParentheses = function (s) {
  let n = s.length;
  let max = 0;
  let sta = [];
  sta.push(-1);
  for (let i = 0; i < n; i++) {
    if (s[i] =='('){
      sta.push(i)
    }else{
      sta.pop();
      if(sta.length==0){
        sta.push(i);
      }else{
        max = Math.max(max,i-sta[sta.length-1])
      }
    }
  }
  return max;
};

let s = ")()()("
console.log(longestValidParentheses(s));