/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var resultList = [];
  while (true) {
    var multiple = String(n)
      .split("")
      .map((X) => X ** 2)
      .reduce((a, b) => a + b);
    if (resultList.includes(multiple)&&n!==1) {
      return false;
    } else if (n !== 1) {
      resultList.push(multiple);
      n = multiple;
    } else {
      return true;
    }
  }
};
// @lc code=end
isHappy(19);
