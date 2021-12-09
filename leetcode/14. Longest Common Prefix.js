var longestCommonPrefix = function (strs) {
  var max = Math.min(...strs.map((x) => x.length));
  var i = 1;
  var D = [];
  while (i <= max) {
    D = strs.map((x) => x.substring(0, i));
    if (D.some((y) => y != D[0])) {
      break;
    }
    i++;
  }
  console.log(D, { i }, "return", i - 1);
  if(i<1){
    return ""
  }else{
    return strs[0].substring(0,i-1)
  }
};

longestCommonPrefix(["dog", "racecar", "car"]);
/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.

*/
