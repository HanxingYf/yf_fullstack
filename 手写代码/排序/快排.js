const quickSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  }
  else {
    var left = [];
    var right = [];
    var pivot = Math.floor(nums.length / 2);
    var base = nums.splice(pivot, 1)[0];
    // console.log(nums);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < base) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
    return quickSort(left).concat([base], quickSort(right));
  }
}

let nums = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3];
console.log(quickSort(nums));