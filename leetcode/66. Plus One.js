// working ......
var plusOne = function (digits) {
  digits.reverse();
  digits[0] += 1;
  var save = 0;

  for (var i = 0; i < digits.length - 1; i++) {
    save = digits[i];

    if (digits[i] >= 10) {
      digits[i] = save % 10;
      digits[i + 1] += parseInt(save / 10);
    }
  }
  save = digits[digits.length - 1];
  if (digits[digits.length - 1] >= 10) {
    digits[digits.length - 1] = save % 10;
    digits.push(parseInt(save / 10));
  }

  digits.reverse();
  console.log(digits); // working ......
  var plusOne = function (digits) {
    digits.reverse();
    digits[0] += 1;
    var save = 0;

    for (var i = 0; i < digits.length - 1; i++) {
      save = digits[i];

      if (digits[i] >= 10) {
        digits[i] = save % 10;
        digits[i + 1] += parseInt(save / 10);
      }
    }
    save = digits[digits.length - 1];
    if (digits[digits.length - 1] >= 10) {
      digits[digits.length - 1] = save % 10;
      digits.push(parseInt(save / 10));
    }

    digits.reverse();
    return digits
  };
};
//plusOne( [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
// plusOne([4,3,2,1])
plusOne([9, 9, 9, 9]);

/*

You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [0]
Output: [1]
Explanation: The array represents the integer 0.
Incrementing by one gives 0 + 1 = 1.
Thus, the result should be [1].
Example 4:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

*/
