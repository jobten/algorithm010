/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start

// 方法三：回溯法
// 1. '('随便添加只要不超出个数即可
// 2. ')'的个数必须大于等于'('的个数
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var resultNums = []
    if (n === 0) return resultNums
    function _dfs(currStr, left, right) {
        if (left === n && right === n) {
            resultNums.push(currStr)
            return
        }
        if (left < n) {
            _dfs(currStr + '(', left + 1, right)
        }

        if (left > right) {
            _dfs(currStr + ')', left, right+1)
        }

    }

    _dfs('', 0, 0)

    return resultNums
}

// 方法二：回溯法
// 1. '('大于')'时剔除
// 2. '（'剩余个数大于0则添加，然后'）'剩余个数大于0则添加
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//     var resultNums = []
//     if (n === 0) return resultNums
//     function _dfs(currStr, left, right) {
//         if (left === 0 && right === 0) {
//             resultNums.push(currStr)
//             return
//         }
//         if (left > right) return

//         if (left > 0) {
//             _dfs(currStr + '(', left -1, right)
//         }

//         if (right > 0) {
//             _dfs(currStr + ')', left, right-1)
//         }

//     }

//     _dfs('', n, n)

//     return resultNums
// }
// 方法一：暴力法
// 1. 先递归穷举所有组合
// 2. 排除非法的组合
/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//     const resultNum = []
//     const generateAll = (currNums, pos) => {
//         if (pos === currNums.length) {
//             if(valid(currNums)) {
//                 resultNum.push(currNums.join(''))
//             }
//         } else {
//             currNums[pos] = '('
//             generateAll(Array.from(currNums), pos+1)
//             currNums[pos] = ')'
//             generateAll(Array.from(currNums), pos+1)
//         }
//     }
//     const valid = (current) => {
//         let balance = 0
//         for (let index = 0; index < current.length; index++) {
//             const element = current[index];
//             if (element === '(') {
//                 balance++
//             } else {
//                 balance--
//             }
//             if (balance < 0) return false
//         }
//         return (balance === 0)
//     }

//     generateAll(new Array(2*n).fill(''), 0)
//     return resultNum
// };
// @lc code=end

