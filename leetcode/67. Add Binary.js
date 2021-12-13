var addBinary = function (a, b) {
  if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  } else if (a.length < b.length) {
    a = a.padStart(b.length, "0");
  }
  
  var sum = 0;
  var result = [];
  for (var i = a.length - 1; i >= 0; i--) {
    result.unshift((Number(a[i]) + Number(b[i]) + sum) % 2);
    sum = parseInt((Number(a[i]) + Number(b[i]) + sum) / 2);
  }
  if (sum > 0) {
    result.unshift(1);
  }
  return result.join('')
};

addBinary("1010", "10");

/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.


*/
