/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

//  方法一：暴力法， 时间复杂度为O(n^2)
//  1.循环遍历所有柱子(最左边和最右边的柱子不能存水，可以忽略)
//  2.左右扫描数组，找到左右两边最高数
//  3.取左右最高数中小的那个数减去当前高度为当前柱子能装的水量
//  4.累计所有柱子水量
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    for (let i = 1; i < height.length - 1; i++) {// 最左边和最右边的柱子不能存水，可以忽略
        let max_left = 0
        let max_right = 0
        for (let j = i; j >=0; j--) { // 找左边最高的柱子
            max_left = Math.max(max_left, height[j])
        }
        for (let k = i; k < height.length; k++) { // 找右边最高的柱子
            max_right = Math.max(max_right, height[k])
        }
        result += Math.min(max_left, max_right) - height[i]
    }
    return result
};
//  方法二：暴力法优化，时间复杂度为O(n)
// 1. 遍历过程中记录每个柱子的左右最高柱子
// 2. 累加

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    const left_maxs = []
    const right_maxs = []
    const size = height.length
    left_maxs[0] = height[0]
    for (let i = 1; i < size; i++) {
        left_maxs[i] = Math.max(height[i], left_maxs[i-1])
    }

    right_maxs[size - 1] = height[size - 1]
    for (let i = size - 2; i >= 0; i--) {
        right_maxs[i] = Math.max(height[i], right_maxs[i+1])
    }

    for (let i = 0; i < size - 1; i ++) {
        result += Math.min(left_maxs[i], right_maxs[i]) - height[i]
    }
    return result
};
//  方法三：双指针法
// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    let left_max = 0
    let right_max = 0
    let left = 0
    right = height.length - 1

    while(left < right) {
        if (height[left] < height[right]) {
            left_max = Math.max(height[left], left_max)
            result += left_max - height[left]
            left++
        } else {
            right_max = Math.max(height[right], right_max)
            result += right_max - height[right]
            right--
        }
    }

    return result
};
// @lc code=end

