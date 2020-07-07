/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
// 解法三：动态规划, 添加临时变量
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var prev = 1
    var cur = 1
    for (var i = 2; i < n + 1; i ++) {
        var temp = cur
        cur = prev + temp
        prev = temp
    } 
    return cur
};

// 解法二：动态规划
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     var nums = new Array(n + 1).fill(0)
//     nums[0] = 1
//     nums[1] = 1
//     for (var i = 2; i < n + 1; i ++) {
//         nums[i] = nums[i - 1] + nums[i - 2]
//     } 
//     return nums[n]
// };


// f(n) = f(n - 1) + f(n - 2)
// 解法一: 递归
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//     var func = (n) => {
//         if (n <= 3) {
//             return n
//         }
//         return func(n - 1) + func(n - 2)
//     }
//     return func(n)
// };
// @lc code=end

