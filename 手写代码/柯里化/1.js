// 个人理解：使用 bind 进行简单的柯里化

// 版本一 this 绑定不明确，可能造成难以追踪的 bug
function foo(a, b) {
  console.log("a : " + a + ", b : " + b);
}
var bar = foo.bind(null, 2);  // 因为我们不需要关心 this 的绑定对象，所以使用 null 作为一个占位值
bar(3);

// 版本二 使用非军事区
function foo(a, b) {
  console.log("a : " + a + ", b : " + b);
}
// DMZ(非军事区)
var MyDMZ = Object.create(null);

foo.apply(MyDMZ, [2, 3]); // 将数组展开成参数

var bar = foo.bind(MyDMZ, 2);  
bar(3);



// 只能看懂第二版的简易代码……
function sub_curry(fn) {
  return function () {
    return fn()
  }
}

function curry(fn, length) {
  length = length || 4;
  return function () {
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    }
    else {
      return fn()
    }
  }
}

var fn0 = function () {
  console.log(1)
}

var fn1 = curry(fn0)

fn1()()()() // 1
