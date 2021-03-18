// 1*2-3+4/2

function Cal(str) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < str.length; i++) {
    left = i;
    right = left;
    while (str[i] != '+' || str[i] != '-' || str[i] != '*' || str[i] != '/') {
      
    }
  }
}

let str = '1*2-3+4/2';
console.log(Cal(str));