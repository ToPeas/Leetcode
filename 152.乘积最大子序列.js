/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 *
 * https://leetcode-cn.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (35.54%)
 * Likes:    312
 * Dislikes: 0
 * Total Accepted:    26.5K
 * Total Submissions: 73.4K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * 给定一个整数数组 nums ，找出一个序列中乘积最大的连续子序列（该序列至少包含一个数）。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,-2,4]
 * 输出: 6
 * 解释: 子数组 [2,3] 有最大乘积 6。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-2,0,-1]
 * 输出: 0
 * 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


var maxProduct = function (nums) {
  if (!nums.length) return nums
  let n = nums.length
  let dp = Array(nums.length + 1)
  let max = 0
  dp[0] = 1
  for (let i = 0; i < n; i++) {
    if (nums[i] * nums[i - 1] < 0) {
      dp[i + 1] = dp[i]
    } else if (nums[i] * nums[i - 1] >= dp[i]) {
      dp[i + 1] = nums[i] * nums[i - 1]
    } else {
      dp[i + 1] = dp[i]
    }
    max = dp[i + 1]
  }
  console.log(dp)
  return dp[n]
};
// @lc code=end

