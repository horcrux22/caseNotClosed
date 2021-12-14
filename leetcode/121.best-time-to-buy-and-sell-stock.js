/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var profit = 0;
  var i = 0;
  while (prices.length > 1) {
    if (
      prices.every((a) => a - Math.max(...prices) >= 0) &&
      Math.max(...prices.map((x) => x - prices[0])) > profit
    ) {
      profit = Math.max(...prices.map((x) => x - prices[0]));
    }
    prices.shift();
  }
  return profit;
};
maxProfit([1, 2, 4]);
// @lc code=end

// while(prices.length!=0){
//   if(prices[0]==Math.min(...prices)){
//     if(Math.max(...prices)-Math.min(...prices)>profit){
//       profit=Math.max(...prices)-Math.min(...prices)
//     }
//   } else {
//     if(prices.slice(i+1).some((x)=> prices[i]<x)){
//       if(Math.max(...prices.slice(i+1))-prices[i]>profit){
//         profit=Math.max(...prices.slice(i+1))-prices[i]
//       }
//     }
//   }
//   prices=prices.slice(i+1)

// }
