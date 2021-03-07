const bubbleSort = (nums) => {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tmp;
      }
    }
  }
  return nums;
}