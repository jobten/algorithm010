/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start

// 方法二: 计数 + hash分类
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = new Map()
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i]
        var arr = Array(26).fill(0)
        for(var j = 0; j < str.length; j++) {
            arr[str.charCodeAt(j) - 97]++
        }
        var hashKey = arr.join('')
        const temps = map.get(hashKey) || []
        temps.push(str)
        map.set(hashKey, temps)
    }
    return [...map.values()]
};

// 方法一: 排序 + hash分类
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     var map = new Map()
//     strs.forEach(item => {
//         const itemSorted = item.split('').sort().join('')
//         const temps = map.get(itemSorted) || []
//         temps.push(item)
//         map.set(itemSorted, temps)
//     })
//     return [...map.values()]
// };
// @lc code=end

