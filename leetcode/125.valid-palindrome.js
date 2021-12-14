/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  if (s != " ") {
    s = s.split("").filter((x) => {
      if (
        (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) ||
        (x.charCodeAt() >= 48 && x.charCodeAt() <= 57)
      ) {
        //48 57
        return true;
      }
    });

    if (s.join("") == s.reverse().join("")) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
isPalindrome("0p");
// @lc code=end
//97 122
