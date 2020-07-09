/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
// 方法一：从后往前遍历数组
// 1. 小于9，加1
// 2. 等于9，变成0，前一位加1
// 3. 等于10，变成1, 前一位加1
// 4. 注意添加plused标志
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits.length === 1) {
        if (digits[0] === 9) return [1, 0]
        digits[0]++
        return digits
    }
    let i = digits.length - 1
    let plused = false
    while(i > 0) {
        if (!plused) {
            if(digits[i] < 9) {
                digits[i]++
                break
            } else if (digits[i] === 9) {
                digits[i] = 0
                digits[i-1]++
                plused = true
            }
        } else {
            if (digits[i] === 10) {
                digits[i] = 0
                digits[i-1]++
            } else {
                plused = false
                break
            }
        }
        i--
    }
    if (digits[0] === 10) {
        digits[0] = 0
        digits.unshift(1)
    }
    return digits
};

// 方法二：从后往前遍历数组
// 1. 当前数加1
// 2. 当前数等于其值对10求余
// 3. 求余后等于0，则继续遍历
// 4. 求余后不等于直接返回数组
// 5. 遍历完后仍未得到结果，则需要数组前面加1
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >=0 ; i--) {
        digits[i]++
        digits[i] = digits[i]%10
        if (digits[i] != 0) return digits    
    }
    digits.unshift(1)
    return digits
};
// @lc code=end

