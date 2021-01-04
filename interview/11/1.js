const arr = [3,4,5];
// 给出在数组的尾部/头部 加、删除的方法
arr.push(6); //面向对象的语言
console.log(arr.pop());
arr.unshift(1);
arr.shift();
// 把数组打印出来，有多少种方法
console.log(arr);

arr.forEach(item =>{
    console.log(item);
})