/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  console.log((num).toString(2));
  var bin = num.toString(2).padStart(
    4-((num).toString(2).length % 4) + (num).toString(2).length, "0");
  console.log(bin)
};
// @lc code=end
toHex(num);
