/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//  方法二：迭代
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []
    const resultNums = []
    const stack = [root]
    while(stack.length > 0) {
        const curr = stack.pop()
        resultNums.push(curr.val)
        if (curr.right) {
            stack.push(curr.right)
        }
        if (curr.left) {
            stack.push(curr.left)
        }
    }
    return resultNums
};

//  方法一：递归
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     if(!root) return []
//     return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
// };
// @lc code=end

