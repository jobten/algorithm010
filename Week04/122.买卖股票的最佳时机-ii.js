/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
// 贪心法：只要上涨日则买，下降日不买
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        const temp = prices[i] - prices[i-1]
        if (temp > 0) profit += temp
    }
    return profit
};
// @lc code=end

