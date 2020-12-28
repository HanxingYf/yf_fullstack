# js 的灵魂在函数，函数的灵魂在匿名函数

- 匿名函数
    ```js
        ()=>{}
        (function(){

        })()
    ```
- 作为图书管理系统，写书的入库类
    js面向对象class关键字来的比较晚，用function来构造类
    js类有点像火车，火车头，车身
    ```Javascript
    //单独的构造函数可以成为一个类
    function Book(isbn,title,author){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
    }
    ```

- 构造函数与普通函数的区别
    生产实例 constructor ?
    构造函数
    - 构造函数函数名首字母大写
    - 运行方式 普通函数直接运行，构造函数 new fn()  new 的时候会吧构造函数执行一次
    - this指向实例
    - 对象，原型对象都是object
    - object 是顶层对象，也是一个函数 new object(){}
    - 任何一个函数都有一个prototype属性 火车身
    - 任何一个对象实例都一定有 __proto__ 私有属性 指向原型对象，基于原型的
     js_dontKnow.display(); 基于原型继承父类的方法
    - 原型链
        console.log(js_dontKnow.__proto__ == Book.prototype);   //true
        console.log(js_dontKnow.__proto__.__proto__ == Object.prototype); //true
        Book.prototype.isPrototypeOf(js_dontKnow)
        js_dontKnow.hasOwnProperty('display')
    - JS class 关键字只是语法糖
