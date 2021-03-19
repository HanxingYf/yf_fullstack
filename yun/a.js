// setTimeout(function(){
//   console.log('1')
// });

// new Promise(function(resolve){
//   console.log('2');
//               resolve();
// }).then(function(){
//   console.log('3')
// });

// console.log('4');

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');