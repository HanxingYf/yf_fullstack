var longestValidParentheses = function (s) {
  let n = s.length;
  let max = 0;
  let left = 0, right = 0;
  for (let i = 0; i <n; i++) {
    if (s[i] == '(') left++;
    else {
      right++;
    }
    if (left == right) {
      max = Math.max(max, right * 2)
    } else if (right > left) {
      left = 0;
      right = 0;
    }
  }

  left = 0;
  right = 0;
  for (let i = n-1; i >=0; i--) {
    if (s[i] == '(') left++;
    else {
      right++;
    }
    if (left == right) {
      max = Math.max(max, left * 2)
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }
  return max;
};

let s = ")()())"
console.log(longestValidParentheses(s));