var strStr = function (haystack, needle) {
  var i = 0;

  while (i <= haystack.length - needle.length) {
    if (haystack.substr(i, needle.length) == needle) {
      break;
    } else if (i == haystack.length - needle.length) {
      i = -1;
      break;
    }
    i++;
  }
  if(haystack.length < needle.length){
    return -1
  }
  return i;
};

strStr("hello", "ll"); //2
strStr("aaaaa", "bba"); //-1
strStr("", ""); //0

/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? 
This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Example 3:

Input: haystack = "", needle = ""
Output: 0
 

Constraints:

0 <= haystack.length, needle.length <= 5 * 104
haystack and needle consist of only lower-case English characters.

*/
