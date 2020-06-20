/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start

//  方法二：哈希表
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length < 2) return []
    const map = new Map()
    for (var i = 0; i < nums.length; i++) {
        const key = target - nums[i]
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        } else {
            map.set(key, i)
        }
    }
    return []
};
//  方法一：2重循环暴力求解
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     if (nums.length < 2) return []
//     for (var i = 0; i < nums.length - 1; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };
// @lc code=end

