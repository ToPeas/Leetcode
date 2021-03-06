/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.33%)
 * Likes:    333
 * Dislikes: 0
 * Total Accepted:    73.4K
 * Total Submissions: 121.7K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length
  if (len === 0) return null
  if (len === 1) return nums[0]
  let arr = nums.sort((a, b) => a - b)
  let num = 1
  let _len = Math.ceil(nums.length / 2)
  for (let i = 0; i < len; i++) {
    if (arr[i] === arr[i + 1]) {
      num = num + 1
      if (num >= _len) {
        return arr[i]
      }
    } else {
      num = 1
    }

  }

};
// @lc code=end

