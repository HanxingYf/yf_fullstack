function Point(x, y){ 
  console.log(this); // point对象
  this.x = x; 
  this.y = y; 
  this.moveTo = function(x,y){
    let a = 11
    console.log(this,'----');
     this.x = x;
     this.y = y;
     console.log(this.x);//1 10
     console.log(this.y);//1 10
  }
}
var p1 =  new Point(0,0); //注意这种形式方法的调用及apply、call的使用

var p2 = {
   x:0,
   y:0
}
p1.moveTo(1,1); 
p1.moveTo.apply(p2,[10,10]);

// console.log(x);// x is not defined
console.log(y);// 