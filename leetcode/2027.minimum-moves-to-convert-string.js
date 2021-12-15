/*
 * @lc app=leetcode id=2027 lang=javascript
 *
 * [2027] Minimum Moves to Convert String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    var count =0;
    for (var i ; i<s.length;i++){
      if(s.slice(i,i+2).includes(' ')){
        break;
      }
    }
};
// @lc code=end

