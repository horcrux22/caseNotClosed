/*
 * @lc app=leetcode id=495 lang=javascript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
//solve...
var findPoisonedDuration = function (timeSeries, duration) {
  var result = [];
  if (duration === 0) {
    return 0;
  }
  for (var i = 0; i < timeSeries.length; i++) {
    result.push([timeSeries[i], timeSeries[i] + duration - 1]);
  }
  //console.log(Array.from([...new Set(result.flat())]).length);
  console.log(result)

  return Array.from([...new Set(result.flat())]).length
};
// @lc code=end

findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
