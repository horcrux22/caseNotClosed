//--runtime error :P--- #1
/* 
var mergeTwoLists = function (list1, list2) {
  var output = [];
  if (list1.length * list2.length == 0) {
    console.log(list1.concat(list2), "if");

    return list1.concat(list2);
  } else {
    for (var i = 0; Math.max(list1.length, list2.length); i++) {
      if (list1[i] == undefined || list2[i] == undefined) {
        if (list1.length == list2.length) {
          console.log(output, "elseif");
          return output;
        } else if (list1.length > list2.length) {
          return output.concat(list1.slice(i));
        } else {
          return output.concat(list2.slice(i));
        }
      } else {
        if (list1[i] < list2[i]) {
          output.push(list1[i]);
          output.push(list2[i]);
        } else {
          output.push(list2[i]);
          output.push(list1[i]);
        }
      }
    }
  }
  console.log(output, "final");
  return output;
};
*/

//--runtime error :P--- #2
/*
var mergeTwoLists = function (list1, list2) {
  var a = [];
  for (var i = 0; i < list1.length; i++) {
    if (list2[i] == undefined) {
      break;
    }
    a.push([list1[i], list2[i]]);
  }
  if (list1.length > list2.length) {
    a.push(list1.slice(i));
  } else if (list1.length < list2.length) {
    a.push(list2.slice(i));
  }
  console.log(a.map((x)=>x.sort((y,z)=>y-z)).flat())
  return a.map((x) => x.sort((y, z) => y - z)).flat();
};

mergeTwoLists([1, 2, 4], [1, 3, 4]); //Output: [1,1,2,3,4,4]
mergeTwoLists([], []); // []
mergeTwoLists([], [0]); //[0]
*/

/*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. 
The list should be made by splicing together 
the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.

*/
