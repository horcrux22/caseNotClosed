// not working ?_?
var deleteDuplicates = function (head) {
  var count = 0;
  
  while (true) {
    if (head[count+1] ==undefined) {
      console.log({head},'end')
      break;
    } else if (head[count] == head[count+1]) {
      head.splice(count + 1, 1);
    } else if (head[count] != head[count+1]) {
      count++;
    }
  }
  return head;
};


deleteDuplicates([1, 1, 2]);
deleteDuplicates([1, 1, 2, 3, 3]);

/*
Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]
Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
 
Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/
