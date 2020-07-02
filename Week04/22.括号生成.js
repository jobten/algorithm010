/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start

// 方法一：暴力法
// 1. 先递归穷举所有组合
// 2. 排除非法的组合
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const resultNum = []
    const generateAll = (currNums, pos) => {
        if (pos === currNums.length) {
            if(valid(currNums)) {
                resultNum.push(currNums.join(''))
            }
        } else {
            currNums[pos] = '('
            generateAll(Array.from(currNums), pos+1)
            currNums[pos] = ')'
            generateAll(Array.from(currNums), pos+1)
        }
    }
    const valid = (current) => {
        let balance = 0
        for (let index = 0; index < current.length; index++) {
            const element = current[index];
            if (element === '(') {
                balance++
            } else {
                balance--
            }
            if (balance < 0) return false
        }
        return (balance === 0)
    }
}
//     generateAll(new Array(2*n).fill(''), 0)
//     return resultNum
// };

// 方法二：回溯法，，深度优先遍历，括号做减法
// 1. '('大于')'时剔除
// 2. '（'剩余个数大于0则添加，然后'）'剩余个数大于0则添加
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var resultNums = []
    if (n === 0) return resultNums
    function _dfs(currStr, left, right) {
        if (left === 0 && right === 0) {
            resultNums.push(currStr)
            return
        }
        if (left > right) return

        if (left > 0) {
            _dfs(currStr + '(', left -1, right)
        }

        if (right > 0) {
            _dfs(currStr + ')', left, right-1)
        }

    }

    _dfs('', n, n)

    return resultNums
}

// 方法三：回溯法，深度优先遍历，括号做加法
// 1. '('个数不可以小于')' 
// 2. '('个数不超出个数
// 2. ')'个数的个数不超出
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
        if (left < right) return
        if (left < n) {
            _dfs(currStr + '(', left + 1, right)
        }

        if (right < n) {
            _dfs(currStr + ')', left, right+1)
        }

    }

    _dfs('', 0, 0)

    return resultNums
}

// 方法三：广度优先遍历
/**
 * @param {number} n
 * @return {string[]}
 */
class Node {
    constructor(left, right, res) {
        this.left = left
        this.right = right
        this.res = res
    }
}

var generateParenthesis = function(n) {
    let resultNums = []
    let queue = []
    queue.push(new Node(0, 0, ''))
    while(queue.length) {
        let node = queue.shift()
        const {left, right, res} = node
        if (left === n && right === n) resultNums.push(res)
        if (left < n) queue.push(new Node(left + 1, right, res + '('))
        if (right < n && left > right) queue.push(new Node(left, right + 1, res + ')'))
    }

    return resultNums
}
// @lc code=end