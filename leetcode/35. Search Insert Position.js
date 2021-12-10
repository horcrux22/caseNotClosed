var searchInsert = function (nums, target) {
  if (nums.indexOf(target) < 0) {
    nums.push(target);
    nums.sort((x, y) => x - y);
  }
  console.log(nums.indexOf(target));
  return nums.indexOf(target);
};
searchInsert([1, 3, 5, 6], 5); //2
searchInsert([1, 3, 5, 6], 2); //1
searchInsert([1, 3, 5, 6], 7); //4
searchInsert([1, 3, 5, 6], 0); //0
searchInsert([1], 0); //0

/*

Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, 
return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
Example 4:

Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0

*/
