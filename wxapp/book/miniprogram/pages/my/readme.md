20软件184黄煜  
#  JS 学习

- 阮一峰

 1.  js 变量的数据类型由值决定
       - 常量   const   es6前不存在常量  只是用 var
       -  const  常量    无法改变为其他类型  
       - 简单类型的值不可变     复杂数据类型  Object值可以改变
       - 数值、布尔、字符串、undefined、null、对象（数组、函数）、symbol

 2. typeOf [1,2,3] 如何知道是数组?
    区分简单数据类型 和复杂数据类型
    复杂数据类型 function
    typeof 返回结果是该类型的字符串形式表示（number、string、undefined、boolean、function、object）
      - 在 typeof中 无法识别 null  和 array 

 3. Object.prototype.toString.call()  
    Object 是所有对象的原型对象  
    prototype 
    toString
    call

  4. 举例说明
            function Cat(name,color) {
            this.name = name;  //this 指向它实例的
            this.color = color;
            // this.type = '猫科动物',
            // prototype 要生成的原因    需要给方法添加一个方法   让方法作为一个属性 
            // this.eat = function(){
            //     console.log('老鼠');
            // }
            }

            //如果是 static  静态  不在实例上
            // Cat.eat = function(){

            // }

           -  // 所以 构建 prototype   使 Cat方法作为属性  prototype 作为原型对象方法
           -  //prototype  原型对象   无须分配内存 即可调用
            Cat.prototype.eat = function (){
                  console.log('老鼠');
            }
            Cat.prototype.type = '猫科动物';

            //将其放在Cat外的原因  ？？？？？？？？

           -  //因为 new  的时候一定会执行 Cat 
           -  //  所以会执行内存分配  


            // 实例化对象
            var cat1 = new Cat("大毛","黑色");
            var cat2 = new Cat("二毛","白色");

            console.log(cat1 );
            console.log(cat1.constructor == cat2.constructor )  //构造函数
            console.log(cat1 instanceof Cat);

            cat1.eat();