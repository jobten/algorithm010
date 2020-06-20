/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start

// 方法一：哈希
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const resultNums = []
    const map = {}

    // 1. 构建map，key为元素值，value为出现频率
    nums.forEach(item => {
        map[item] ? (map[item] = map[item] + 1) : (map[item] = 1)
    })

    // 2.对map的key(元素值)按照其对应值(频率)排序
    const sortedKey = Object.keys(map).sort((a, b) => (map[b]-map[a]))

    // 3.取前m个
    for(var i = 0; i < k; i++) {
        resultNums.push(sortedKey[i])
    }
    return resultNums
    
};
// @lc code=end

