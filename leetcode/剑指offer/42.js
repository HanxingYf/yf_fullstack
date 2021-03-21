nums = [-2,-1]

var maxSubArray = function (nums) {
  let dp = [];
  let max = Number.MIN_VALUE;
  if (nums.length === 1) {
    return nums[0];
  }
  dp.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] >= 0) {
      dp[i] = nums[i] + dp[i - 1];
      max = Math.max(dp[i], max);
    }
    else {
      dp[i] = nums[i];
      max = Math.max(dp[i], max);
    }
  }
  return max;
};
console.log(maxSubArray(nums));

// dp[i] 以i结尾的子数组最大和
// dp[i-1]>=0   dp[i] = dp[i]+dp[i-1]
// dp[i-1]<0    dp[i] = nums[i];