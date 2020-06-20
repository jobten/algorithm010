/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 方法二：迭代法
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return []
    const resultNums = []
    const stack = [root]
    while(stack.length) {
        const curr = stack.pop()
        resultNums.push(curr.val)
        for (var i = curr.children.length - 1; i >= 0; i--) {
            stack.push(curr.children[i])
        }
    }
    return resultNums
};

// 方法一：递归
/**
 * @param {Node} root
 * @return {number[]}
 */
// var preorder = function(root) {
//     if (!root) return []
//     var resultNums = []
//     recursion(root)
//     function recursion(root) {
//         if (!root) return
//         resultNums.push(root.val)
//         for (var i = 0; i < root.children.length; i++) {
//             recursion(root.children[i])
//         }
//     }
//     return resultNums
// };
// @lc code=end

