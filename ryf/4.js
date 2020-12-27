// 函数是天生可以复用的
function Cat(name, color){
    return {
        name,
        color
    }
    
}

var cat1 = Cat('Tom','Yellow');
console.log(cat1.constructor);