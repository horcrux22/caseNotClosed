/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  var maxArr = [];
  for (var i = 0; i < 3; i++) {
    if (Math.max(...nums) == -Infinity) {
      maxArr.push("_");
      break;
    }
    maxArr.push(Math.max(...nums));
    nums = nums.filter((x) => x != Math.max(...nums));
  }
  console.log(maxArr)
  if (maxArr.some((x) => (x == "_"))) {
    return maxArr[0];
  } else {
    return maxArr[2];
  }
  
};
// @lc code=end
thirdMax([2, 2, 3, 1]);
