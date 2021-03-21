// async function async1(){
//   console.log('async1 start');
//    await async2();
//    console.log('async1 end')
// }
// async function async2(){
//    console.log('async2')
// }
// console.log('script start');
// async1();
// console.log('script end')
// // 输出顺序：script start->async1 start->async2->script end->async1 end




async function f1(){
  return "hello world11";
};
console.log('a');
f1().then((v)=>console.log(v));
