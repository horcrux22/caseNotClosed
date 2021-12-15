/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var baseNum=Math.abs(num)
    var result =[]
    while(baseNum>=7){
      result.push(String(baseNum%7))
      baseNum=parseInt(baseNum/7)
      console.log({result},{baseNum})
    }
};
// @lc code=end
convertToBase7(100)
