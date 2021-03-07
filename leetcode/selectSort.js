const selectSort = (nums) => {
  var idx;
  for (let i = 0; i < nums.length - 1; i++) {
    idx = i;
    for (let j = j + 1; j < nums.length; j++) {
      if (nums[j] < nums[idx]) {
        idx = j;
      }
    }
    if (nums[idx] < nums[i]) {
      let tmp = nums[idx];
      nums[idx] = nums[i];
      nums[i] = tmp;
    }
  }
  return nums;
}