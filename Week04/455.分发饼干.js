/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
// 贪心法：双排序后从小到大比对
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if (!g || !s) return 0
    g.sort((a, b) => (a - b))
    s.sort((a, b) => (a - b))
    let si = 0
    let gi = 0
    while(si < s.length && gi < g.length) {
        if (s[si] >= g[gi]) {
            gi++
        }
        si++
    }
    return gi
};
// @lc code=end

