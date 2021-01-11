/**
 * 
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */
const isTypeof = (o, type) =>{
    // return Object.prototype.toString.call(o);
    // 简单数据类型
    // if(typeof o === type){
    //     return typeof o === type;
    // }else{
    //     console.log(Object.prototype.toString.call(o));
    //     // console.log('是对象');
    // }
    // if(['number','boolea','function','string'].indexOf(type)>0){
    //     return typeof o === type;
    // }
    return (Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0);
}
// null 和 array 是有问题的
let a = 1;
// let a = () => {}
console.log(isTypeof(a, 'number'));
// var str="Hello world, welcome to the universe.";
// var n=str.indexOf("Hello");
// console.log(n);