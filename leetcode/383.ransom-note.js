/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (
    magazine
      .split("")
      .sort()
      .join("")
      .includes(ransomNote.split("").sort().join(""))
  ) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
canConstruct("a", "b");
canConstruct("aa", "ab");
canConstruct("aa", "aab");
