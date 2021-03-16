var maxSubArray = function (nums) {
  // dp[i] = max(dp[i-1],dp[i-1]+nums[i])


  // let res = nums[0];
  // for (let i = 1; i < nums.length; i++) {
  //   nums[i] += Math.max(nums[i-1],0);
  //   res = Math.max(res,nums[i])
  // }
  // return res;



  let dp = [];
  dp.push(nums[0]);
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if(dp[i-1]<=0)  dp[i] = nums[i];
    else{
      dp[i] = dp[i-1] + nums[i]
    }
    res = Math.max(res,dp[i]);
    return dp[i];
  }
};


let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));