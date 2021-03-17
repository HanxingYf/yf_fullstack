// 源对象
var a = {
  num: 1,
  per: {
    name: 'yf',
    age: 22
  }
}

// 深拷贝
function getDeep(obj) {
  var temp = Array.isArray(obj) ? [] : {};
  for (var item in obj) {
    if (typeof obj[item] == 'object') {
      temp[item] = getDeep(obj[item])
    }
    else {
      temp[item] = obj[item];
    }
  }
  return temp;
}

var b = getDeep(a);
b.num = 1;
b.per.name = 'yfs'

console.log(a, b);