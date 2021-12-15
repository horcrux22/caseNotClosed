/*
 * @lc app=leetcode id=1876 lang=javascript
 *
 * [1876] Substrings of Size Three with Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  var result = [];
  for (var i = 0; i < s.length - 2; i++) {
    result.push(s.substring(i, i + 3));
  }
  console.log(result)
  result = result.filter((x) => {
    if (
      x[0] != x[1] &&
      x[0] != x[2] &&
      Math.abs(x.charCodeAt(1) - x.charCodeAt(2)) == 1
    ) {
      return x;
    }
  });
  console.log(result);
  return result.length;
};
// @lc code=end
// 97-122 a-z
countGoodSubstrings("aababcabc");
