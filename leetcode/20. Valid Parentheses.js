var isValid = function (s) {
  answer = true;
  if (s.length % 2 == 0) {
    while (s.length > 0) {
      if (s == s.replace("()", "").replace("[]", "").replace("{}", "")) {
        answer = false;
        break;
      }
      s = s.replace("()", "").replace("[]", "").replace("{}", "");
    }
  } else {
    return false;
  }
  return answer;
};
isValid("({()[[]]}{()})");
isValid("()[]{}");
isValid("([)]");

/*


Given a string s containing just the characters 
'(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()" aA
Output: true
Example 2:

Input: s = "()[]{}" aAcCbB
Output: true
Example 3:

Input: s = "(]" aC
Output: false
Example 4:

Input: s = "([)]" acAC
Output: false
Example 5:

Input: s = "{[]}" bcCB
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/
