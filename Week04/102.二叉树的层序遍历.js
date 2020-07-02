/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 方法一：广度优先遍历
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const resultNums = []
    const queue = [root]
    let level = 0
    while(queue.length) {
        let levelNum = queue.length
        resultNums[level] = []
        while(levelNum--) {
            const node = queue.shift()
            resultNums[level].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        level++
    }
    return resultNums
};
// 方法二：深度优先遍历
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const resultNums = []

    const dfs = (node, level) => {
        if (!node) return
        // resultNums[level]未定义时初始化为[]
        resultNums[level] || (resultNums[level] = [])
        resultNums[level].push(node.val)
        if (node.left) dfs(node.left, level+1)
        if (node.right) dfs(node.right, level+1)
    }
    dfs(root, 0)
    return resultNums
};
// @lc code=end

