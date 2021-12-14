/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  console.log(n)
  console.log(n.toString(2))
  var binN=n.toString(2).padStart(32,'0')
  var sum =0
  for(var i =0; i<binN.length;i++){
    if(binN[i]=='1'){
      sum+= 2**i
    }
  }
  return sum
};
// @lc code=end
reverseBits(00000010100101000001111010011100);

