/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length || 0
    if (!nums) ruturn -1

    if (n === 1) {
        return nums[0]
    }

    let l = 0
    let r = n - 1

    if (nums[r] > nums[l]) {
        return nums[0]
    }



    while(l <= r) {
        // 注意要求整，不然会出现小数点
        let mid = parseInt(l + (r - l) / 2)
        if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
        if (nums[mid - 1] > nums[mid]) return nums[mid]

        // 左半部分有序，在右边查找
        if (nums[0] < nums[mid]) {
            l = mid + 1
        } else { // 右半边有序，在左边查找
            r = mid -1
        }
    }
    return -1
};
// @lc code=end

