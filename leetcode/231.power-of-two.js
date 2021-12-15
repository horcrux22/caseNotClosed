/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (Math.log2(n) == parseInt(Math.log2(n))) {
    return true;
  }
  return false;
};
// @lc code=end
