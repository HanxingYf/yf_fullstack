算法中占比动态规划  DP
思想，建立感性认识， 具象去学习

- 爬楼梯
  n阶

  算法小册，记忆一些算法
  自顶向下问题，划分成子问题来解决的话，树状结构，请使用递归

两个关键特征
  1. 要求你给出达成某个目的地的解法个数
  2. 不要求给出每种算法对应的具体路径

  1. 定位到问题的终点 n 走法
  2. 站在这个终点，去考虑之前要做什么

  匹配了树状结构
  f(n) = f(n-1) + f(n-2);

  dp[i] = dp[i-1] + dp[i-2]
  

  不同面额的coins 和一个总金额 amout
  conss = [1,2,5]  amount = 11;
  你所需的最小硬币个数
  11  1,2,5

  dp[i] // 总额为 i，dp[i] 硬币个数  j 为conss的长度
  dp[i] = Math.min(dp[i-conss[0]] + dp[i-conss[1]] + ... + dp[i-conss[j]]) + 1;
  







