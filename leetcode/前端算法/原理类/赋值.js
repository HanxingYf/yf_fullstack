//首先在栈开辟一个空间a存放指针地址，设指针地址为address1；同时会在堆里面开辟一个空间放置对象数据 2 
var a = {
  no: 1,
  per: {
   name: "jack"
  },
  per2: {
   name: "rose"
  }
 }
  
 //a赋值给b,此时b会在栈开辟一个空间b，用来放置address1，这个指针指向a所在堆的对象数据
 var b = a;
  
 //修改赋值后的值b，其实就是修改b的指针address1所指向的对象数据
 b.no = 1314;
  
 //修改b会影响原数据（所有层次的数据都会影响）
 //这个原数据其实不是原数据，因为a和b其实都是同一个数据
 //就像从中国去美国，可以从a地点（比如北京）或者b地点（比如上海）坐飞机去，但是到达的都是同一个地方（也就是对象数据）
 b.per.name = "王五";
  
 console.log(a, b)