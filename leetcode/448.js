var findDisappearedNumbers = function (nums) {
  // let arr = new Array(nums.length + 1).fill(0);
  // for (let num of nums) {
  //   arr[num] = 1;
  // }
  // let res = [];
  // for (let index in arr) {
  //   if (arr[index] == 0 && index != 0) {

  //     res.push(parseInt(index));
  //   }
  // }


  // var a = new Set([1, 2, 3]);
  // var b = new Set([4, 3, 2]);
  // var intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}


  let unique = new Set([...nums]);

  let a = 1;
  let arr = new Array();
  for (let i = 0; i < nums.length; i++) {
    arr[i] = i + 1;
  }
  let b = [...new Set(arr)];
  let diff = new Set([...b].filter(x => !unique.has(x)));
  return [...diff];
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));