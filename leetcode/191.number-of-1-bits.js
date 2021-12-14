/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var weightArray = n
    .toString(2)
    .padStart(32, "0")
    .split("")
    .filter((x) => x != "0");
  return weightArray.length;
};
// @lc code=end
