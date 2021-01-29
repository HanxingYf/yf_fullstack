var pivotIndex = function (nums) {
  let sum_l = 0;
  let sum_r = 0;
  let sum = 0;
  for (let i of nums) {
    sum += i;
  }
  for (let i = 0; i < nums.length; i++) {
    sum_l = 0;
    sum_r = 0;
    for (let j = 0; j < i; j++) {
      sum_l += nums[j];
    }
    sum_r = sum - nums[i] - sum_l;
    if (sum_l == sum_r) {
      return i
    }
  }
  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));