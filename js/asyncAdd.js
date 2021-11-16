asyncAdd(3, 5, (err, result) => {
  console.log(result); // 8
});

//   现在要求在本地机器上实现一个 sum 函数，支持以下用法：
(async () => {
  const result1 = await sum(1, 4, 6, 9, 2, 4);
  const result2 = await sum(3, 4, 9, 2, 5, 3, 2, 1, 7);
  const result3 = await sum(1, 6, 0, 5);
  console.log([result1, result2, result3]); // [26, 36, 12]
})();


// 实现

function asyncAdd(a, b, cb){
    setTimeout(() => {
        var res = a + b
    })
}