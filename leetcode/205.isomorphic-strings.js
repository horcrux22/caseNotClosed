/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//time limit
var isIsomorphic = function (s, t) {
  var result = "";
  var ArrayS = [...new Set(s.split(""))];
  var ArrayT = [...new Set(t.split(""))];
  for (var i = 0; i < s.split("").length; i++) {
    if (ArrayS.findIndex((x) => x == s.split("")[i]) >= 0) {
      result += ArrayT[ArrayS.findIndex((x) => x == s.split("")[i])];
    }
  }
  if (result == t) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end
isIsomorphic("egg", "add");
isIsomorphic("paper", "title");
isIsomorphic("foo", "bar");
