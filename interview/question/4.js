//给字符串添加方法  要写到对应的包装对象的原型下才行
var str = 'hello';
String.prototype.last= function(){ 
    return(this.length);
}; 
console.log(str.last());