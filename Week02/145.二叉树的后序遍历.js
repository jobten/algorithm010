/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 方法二：迭代
 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return []
    const resultNums = []
    const stack = [root]
    while(stack.length > 0) {
        const curr = stack.pop()
        resultNums.unshift(curr.val)
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }
    return resultNums
};
// 方法一：递归
 /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var postorderTraversal = function(root) {
//     if (!root) return []
//     return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
// };
// @lc code=end

