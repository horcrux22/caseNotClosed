//-:b- not working
var lengthOfLongestSubstring = function (s) {
  var editArr = [...new Set(s.split(""))];
  console.log(s, editArr, "origin");
  for (var i = 0; i < editArr.length; i++) {
    var arr = [];
    var a = "";
    for (var j = 0; j < s.length; j++) {
      if (s[j] != editArr[i]) {
        a += s[j];
      } else if (s[j] == editArr[i]) {
        if (a.length > 0) {
          arr.push(a);
          a = "";
        }
        arr.push(s[j]);
      }
    }
    if (arr[0] != editArr[i]) {
      arr.shift();
    }
    console.log(arr)
    console.log(arr.filter((x)=> x != editArr[i]).map((y)=>y.length));
  }
};

lengthOfLongestSubstring("abcabcbb");
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
