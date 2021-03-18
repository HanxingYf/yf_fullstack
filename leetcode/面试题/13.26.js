var calculate = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = left;
    while (s[i] >= '0' && s[i] <= '9' && s[i] !== ' ') {
      i++;
      right++;
    }
    if (left !== right) {
      arr.push(s.substr(left, right - left));
    }

    if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/') {
      arr.push(s[i]);
    }
  }
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*') {
      let res = Number(arr[i - 1]) * Number(arr[Number(i) + 1]);
      arr.splice(i - 1, 3, res);
      i = i - 1
    }
    if (arr[i] === '/') {
      let res = parseInt(Number(arr[i - 1]) / Number(arr[Number(i) + 1]));
      arr.splice(i - 1, 3, res);
      i = i - 1
    }
  }
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+') {
      // console.log(arr,i);
      let res = Number(arr[i - 1]) + Number(arr[Number(i) + 1]);
      // console.log(res);
      arr.splice(i - 1, 3, res);
      i = i - 1
    }
    if (arr[i] === '-') {
      let res = Number(arr[i - 1]) - Number(arr[Number(i) + 1]);
      arr.splice(i - 1, 3, res);
      i = i - 1
    }
  }
  return arr[0];
};

let s = "1+1+1";
console.log(calculate(s));