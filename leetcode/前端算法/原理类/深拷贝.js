//在栈开辟一个空间a，存放a的指针地址，设指针地址为address3a，同时在堆开辟一个空间，设这空间为space1a，存放a对象数据
var a = {
  no: 2,
  per: {
    name: "jack"
  },
  per2: {
    name: "rose"
  }
}

//用递归的方式对a进行拷贝属性和值,然后赋值给temp，然后return出去。此时不拷贝指针地址。
function getDeep(obj) {
  var temp = Array.isArray(obj) ? [] : {};
  for (var p in obj) {
    if (typeof obj[p] == "object") {
      temp[p] = getDeep(obj[p])
    } else {
      temp[p] = obj[p]
    }
  }
  return temp;
}

//在栈开辟一个空间b，存放b的指针地址，设指针地址为address3b。同时b在堆开辟一个空间，设这空间为D，存放temp的对象数据
var b = getDeep(a);

//深拷贝后，修改b的值，不论修改属性值，还是整个值替换都不影响原数据a
b.no = 1314;
b.per = []
b.per2 = {
  name: "王五"
}

console.log(a, b)