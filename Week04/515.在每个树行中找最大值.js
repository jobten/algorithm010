/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 方法一:广度优先遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return []
    const resultNums = []
    const queue = [root]
    let level = 0
    while(queue.length) {
        let levelNum = queue.length
        let max = -Infinity // 负无穷大
        while(levelNum--) {
            const node = queue.shift()
            max = Math.max(max, node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        resultNums.push(max)
        level++
    }
    return resultNums
};
// 方法二:深度优先遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return []
    const resultNums = []
    const dfs = (node, level) => {
        if (!node) return
        if (resultNums[level] === undefined || resultNums[level] < node.val) resultNums[level] = node.val
        if(node.left) dfs(node.left, level + 1)
        if(node.right) dfs(node.right, level + 1)
    }
    dfs(root, 0)
    return resultNums
};
// @lc code=end

