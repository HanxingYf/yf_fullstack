function Cat(name,color){
    this.name = name;   // this 指向它实例
    this.color = color;  
    // protype 要生成的原因
    // this.eat = function(){
    //     console.log('老鼠');
    // }
}

// 原型对象
Cat.prototype.eat = function(){
    console.log('老鼠');
}
Cat.prototype.type = '猫科动物';

// 实例化
// new 执行，申请内存
var cat1 = new Cat('大毛','yellow');
var cat2 = new Cat('小毛','blue');

cat1.eat();
// console.log(cat1 instanceof Cat);
// console.log(cat2 instanceof Cat);