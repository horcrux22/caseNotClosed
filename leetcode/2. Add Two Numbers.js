// reverse is not working :D

var addTwoNumbers = function (l1, l2) {
  var calculate =Number(l1.reverse().join("")) + Number(l2.reverse().join(""));

  while (true) {
    if (calculate % 10 == 0) {
      calculate /= 10;
    } else {
      break;
    }
  }
  return String(calculate).split("").reverse();
};
//console.log(String(calculate).split("").reverse());

//addTwoNumbers([2, 4, 3], [5, 6, 4]);
//addTwoNumbers([0], [0]);
addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
/*
2. Add Two Numbers
Medium

15104

3289

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 //
공유
음이 아닌 두 개의 정수를 나타내는 두 개의 비어 있지 않은 연결 리스트가 제공됩니다. 
자릿수는 역순으로 저장되며 각 노드에는 한 자리가 포함됩니다. 
두 숫자를 더하고 합계를 링크 리스트로 반환하세요.

숫자 0을 제외하고 두 숫자에 선행 0이 없다고 가정할 수 있습니다.



 //

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/
