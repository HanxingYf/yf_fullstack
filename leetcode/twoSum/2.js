/**
  * @author yf
  * @data 20-11-20
  * @param {number[]} nums
  * @param {number} target
  * @return {number[]}
  */

//箭头函数
const twoSum = (nums, target) => {
    // console.log('两数相加');
    let map = {};   //JSON Object HashMap 空间复杂度的开销 O(n)
    let res = [];
    //编写功能 一个函数 一个功能
    //callback
    nums.forEach((e, i) => map[e] = i)  //O(n)
    console.log(map);
    //?
    for(let i = 0; i < nums.length; i++){
        let j = map[target - nums[i]];
        if(j && j != i){
            res = [i, j];
            break;
        }
    }
    return res;
}

twoSum([2, 7, 11, 15], 9);