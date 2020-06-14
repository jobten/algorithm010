// 方法二：
// 快慢指针

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     if (nums.length == 0) return 0
//     var j = 0;
//     for (var i = 1; i < nums.length; i++) {
//         if (nums[i] != nums[j]) {
//             j++
//             nums[j] = nums[i]
//         }
//     }
//     return j + 1
// };

// 方法一：
// 暴力法
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     var set = new Set()
//     var i = 0
//     while(i < nums.length) {
//         if (set.has(nums[i])) {
//             nums.splice(i, 1)
//         } else {
//             set.add(nums[i])
//             i ++
//         }
//     }
//     return nums.length
// };