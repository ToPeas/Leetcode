/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 *
 * https://leetcode-cn.com/problems/power-of-three/description/
 *
 * algorithms
 * Easy (45.05%)
 * Likes:    75
 * Dislikes: 0
 * Total Accepted:    28.5K
 * Total Submissions: 62.8K
 * Testcase Example:  '27'
 *
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 27
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 0
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: 9
 * 输出: true
 * 
 * 示例 4:
 * 
 * 输入: 45
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 第一种 直接循环判断
var isPowerOfThree = function (n) {
  let sum = 0
  if (n === 1) return true
  if (n < 1) return false
  let i = 0
  while (n >= sum) {
    ++i
    if (sum === n) {
      return true
    }
    sum = Math.pow(3, i)
  }
  return false
};

// 如果不用循环

// @lc code=end

