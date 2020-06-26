/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const resultNums = [[]]
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0, len = resultNums.length; j < len; j++) {
            resultNums.push(resultNums[j].concat([nums[i]]))
        }
    }
    return resultNums
};
// 方法一：每一层选或不选
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     const resultNums = []
//     const dfs = (list, index) => {
//         if (index === nums.length) {
//             resultNums.push(list)
//             return
//         }
//         // 不选
//         dfs (Array.from(list), index + 1)
//         // 选
//         list.push(nums[index])
//         dfs(Array.from(list), index+1)
//     }

//     if (!nums || nums.length === 0) return
//     dfs([], 0)
//     return resultNums 
// };
// @lc code=end

