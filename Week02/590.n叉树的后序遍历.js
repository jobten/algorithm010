/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 方法二：迭代法
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return []
    const resultNums = []
    const stack = [root]
    while(stack.length) {
        const curr = stack.pop()
        for (var i = 0; i < curr.children.length; i++) {
            stack.push(curr.children[i])
        }
        resultNums.unshift(curr.val)
    }
    
    return resultNums
};

// 方法一：递归
/**
 * @param {Node} root
 * @return {number[]}
 */
// var postorder = function(root) {
//     if (!root) return []
//     var resultNums = []
//     recursion(root)
//     function recursion(root) {
//         if (!root) return
//         for (var i = 0; i < root.children.length; i++) {
//             recursion(root.children[i])
//         }
//         resultNums.push(root.val)
//     }
//     return resultNums
// };

// @lc code=end

