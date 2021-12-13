// solving....
var climbStairs = function (n) {
  var result = 1;
  if (n == 1) {
    return result;
  } else {
    for (var i = 1; i <= Math.floor(n / 2); i++) {
      if (i == Math.floor(n / 2)) {
        if (n % 2 == 0) {
          result += 1;
          console.log(result);
          return result;
        } else {
          result += n - Math.floor(n / 2);
          console.log(result);
          return result;
        }
      }
      sum = 1;
      for (var j = 0; j < i; j++) {
        sum *= n - i - j;
      }
      result += sum;
    }
  }
};

climbStairs(6);

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45

*/


/*
1

0	1	1

2

0	11	1
1	2	1

3
0	111	1
1	21	2c1

6

0	111111	1
1	21111	5	
2	2211	3*4 =12 (x) 
3	222	1

2211
2121
1221
1122
1212
2112




8
i
0	11111111	1
1	2111111		7c1 (n-i)
2	221111		5c1*6c1 (n-i-1)(n-i)
3	22211		3c1*4c1*5c1
4	2222		1

9

0	111111111	1
1	21111111	8c1
2	2211111		6c1*7c1		
3	222111		4c1*5c1*6c1	
4	22221		5c1

10

0	1111111111	1
1	211111111	9c1
2	22111111	7c1*8c1
3	2221111		5c1*6c1*7c1
4	222211		3c1*4c1*5c1*6c1
5	22222		1(5c5)


*/