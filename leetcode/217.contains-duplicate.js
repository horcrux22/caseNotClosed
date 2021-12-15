/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    console.log(Array.from([...new Set(nums)]))
    if(nums.length != Array.from([...new Set(nums)]).length){
      return true
    }else{
      return false
    }
};
// @lc code=end
containsDuplicate([1,2,3,4])
