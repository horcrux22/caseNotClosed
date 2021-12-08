//-:b-
var lengthOfLongestSubstring = function (s) {
  const Array = [...new Set(s)];
  for (let value of Array) {
    if (s.split(value).length > 2) {
      var calculate = s
        .split(value)
        .slice(1, s.split(value).length - 1)
        .map((X) => X.length);
    }
  }
  //console.log(calculate)
  if (s.length > 2) {
    return Math.max(...calculate) + 1;
  } else if(s.length==2 && s[0]==s[1]){
    return 1;
  }
  else {
    return s.length;
  }
};
// console.log(Math.max(...calculate)+1)

lengthOfLongestSubstring("aabb");
/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/
