/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.split('').sort().join('')==t.split('').sort().join('')){
      return true
    }
    return false
};
isAnagram("anagram",  "nagaram")
// @lc code=end

