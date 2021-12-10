// //Time Limit Exceeded	:P
// var maxSubArray = function (nums) {
//   var sum = nums.reduce((x, y) => x + y);
//   z = 1;
//   if (nums.length > 2) {
//     while (z < nums.length) {
//       j = z;
//       for (var i = 0; i < nums.length - z + 1; i++) {
//         if (nums.slice(i, j).reduce((x, y) => x + y) > sum) {
//           sum = nums.slice(i, j).reduce((x, y) => x + y);
//         }
//         j++;
//       }
//       z++;
//     }
//   } else if (nums.some((x) => x < 0)) {
//     sum = Math.max(...nums);
//   }
//   console.log(sum)
//   return sum;
// };

//maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([-2,-3,-1]);

/*

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104

Follow up: If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, which is more subtle.

*/
