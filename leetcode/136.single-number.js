/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    var i =0

    while(nums[i+1]!=undefined){
      if(nums[i]==nums[i+1]){
        nums.splice(i,2)
      }else{
        i++
      }
    }
    return nums.join(' ')
};
// @lc code=end
singleNumber([2,2,1])

