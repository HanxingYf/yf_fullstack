const bubbleSort = (nums) => {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j+1]) {
        nums[j] = nums[j] + nums[j+1];
        nums[j+1] = nums[j] - nums[j+1];
        nums[j] = nums[j] - nums[j+1]

      }
    }
  }
  return nums;
}

let nums = [5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3];
console.log(bubbleSort(nums));