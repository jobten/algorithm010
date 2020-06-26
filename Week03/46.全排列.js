/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const resultNums = []
    const dfs = (list) => {
        if (list.length === nums.length) return resultNums.push([...list])
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (list.includes(element)) continue
            list.push(nums[i])
            dfs(list)
            list.pop()
        }
    }
    dfs([])
    return resultNums
};
// @lc code=end

