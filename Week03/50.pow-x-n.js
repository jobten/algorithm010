/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
// 方法二：分治
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1
    if (n < 0) return 1 / myPow(x, -n) 
    //n是奇数时 x的n次方 = x*x的n-1次方
    //n是偶数，使用分治，一分为二，等于x*x的n/2次方 
    return n % 2 === 0 ? myPow(x*x, n/2) : x * myPow(x, n - 1)
};
// 方法一：暴力求解，超过2147483647时有问题
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//     if (n === 0) return 1
//     if (n === 1) return x
//     let result = x
//     if (n < 0) return 1/myPow(x, -n)
//     for (let i = 1; i < n; i++) {
//         result = result * x
//     }
//     return result
// };
// @lc code=end

