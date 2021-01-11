- 阮一峰

 1. JS 变量的数据类型由值决定
    常量， es6 以前没有常量  var
    - 类型不可改变
    - 简单类型的值不可变，复杂数据类型可以改变
    - 数值型、字符串、布尔值、undefined、null、symbol、对象（数组，函数）

 2. typeof [11,2,3]; 如何知道是数组
    区别简单数据类型和复杂数据类型
    复杂数据类型中 function
    typeof 可以正确 （细致）得到数据类型的
    number string boolean null undefined symbol object(array,function)

 3. Object.prototype.toString.call()
    Object 是谁？ 所有对象的原型对象？ 这种机制如何构起来？
    prototype 啥玩意儿
    call 借