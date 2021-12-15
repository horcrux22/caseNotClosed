/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// solve...
var isUgly = function (n) {
  while (Math.abs(n) > 1) {
    if (n % 2 == 0 && n / 2 == parseInt(n / 2)) {
      n = n / 2;
    } else if (n % 3 == 0 && n / 3 == parseInt(n / 3)) {
      n = n / 3;
    } else if (n % 5 == 0 && n / 5 == parseInt(n / 5)) {
      n = n / 5;
    } else {
      break;
    }
  }
  
  if (Math.abs(n) != 1) {
    console.log(n,Math.abs(n))
    return false;
  } else {
    return true;
  }
};

// @lc code=end
isUgly(1024);
isUgly(-1024);

