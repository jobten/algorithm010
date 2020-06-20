/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // 方法一：迭代
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return []
    const resultNums = []
    const stack = []
    let curr = root
    while(stack.length > 0 || curr){
        while (curr) {
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        resultNums.push(curr.val)
        curr = curr.right
    }
    return resultNums
};
 // 方法一：递归
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     if (!root) return []
//     return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
// };
// @lc code=end

