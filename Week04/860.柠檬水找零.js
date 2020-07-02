/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
// 贪心算法
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    let result = true
    bills.forEach(bill => {
        if (bill === 5) {
            five++
        } else if (bill === 10){
            if (five === 0) {
                result = false
                return
            }
            five--
            ten++
        } else {
            if (five === 0) result = false
            else if (ten > 0) {
                ten --
                five--
            } else {
                if (five < 3) result = false
                else five = five - 3
            }
        }
    })
    return result
};
// @lc code=end

