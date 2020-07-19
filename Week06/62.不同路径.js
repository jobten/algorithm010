/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

 // 方法一： 动态规划，两维数组
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = new Array(m);
    for(var i = 0;i<n;i++){
        dp[i] = new Array(m);
        dp[i][0] = 1;
    }
    for(var r = 0;r < m;r++){
        dp[0][r] = 1;
    }
    for(var j = 1;j<n;j++){
        for(var z = 1;z<m;z++){
            dp[j][z] = dp[j-1][z]+dp[j][z-1]
        }
    }
    return dp[n-1][m-1];
};

 // 方法二： 动态规划，优化成一维数组
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var cur = new Array(n).fill(1);
    for(var i = 1;i < m;i++){
        for(var r = 1;r < n;r++){
            cur[r] = cur[r-1]+cur[r];
        }
    }
    return cur[n-1];
};
// @lc code=end

