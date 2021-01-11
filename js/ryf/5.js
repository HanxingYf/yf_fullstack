function Cat(name,color){
    this.name = name;
    this.color = color;
}

// 实例化
var cat1 = new Cat('大毛','yellow');
var cat2 = new Cat('小毛','blue');

console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);