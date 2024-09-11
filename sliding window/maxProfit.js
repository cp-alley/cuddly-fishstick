/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

Buy and Sell Stocks
You are given an integer array prices where prices[i] is the price of stock on
the ith day.

You may choose a single day to buy one stock and choose a different day in the
future to sell it.

Return the maximum profit you can achieve. You may choose to not make any
transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

1 <= prices.length <= 100
0 <= prices[i] <= 100
*/

class Solution {

  /**
   * Time: O(n) Space: O(1)
   * @param {number[]} prices
   */
  maxProfit(prices) {
    let buy = 0, sell = 1, currentHigh = 0;

    while (sell < prices.length) {
      let profit = prices[sell] - prices[buy];

      if (profit <= 0) {
        buy = sell;
        sell = buy + 1;
      } else {
        currentHigh = Math.max(profit, currentHigh);
        sell += 1;
      }
    }

    return currentHigh;
  }
}
