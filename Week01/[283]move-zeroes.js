// 方法四(最优解)：双指针法,通过交换优化,遇到非零时互换快慢指针，遇到零时不操作

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var length = nums.length
    var j = 0
    for(var i = 0; i < length; i++) {
        if (nums[i] !== 0) {
            var temp
            temp = nums[j]
            nums[j++] = nums[i]
            nums[i] = temp
        }
     }
};
// 方法三：双指针法
// 1. 使用指针j初始化为0，用于记录非零位置
// 2. 找到非零时，覆盖指针j的位置，此时不会丢失数据
// 3. 遍历完成后在数组j索引之后都添加0即可
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     var length = nums.length
//     var j = 0
//     for(var i = 0; i < length; i++) {
//         if (nums[i] !== 0) {
//             nums[j++] = nums[i]
//         }
//      }
//      for (var i = j; i < length; i ++) {
//          nums[i] = 0
//      }
// };

// 方法二：
// 1. 遍历数组
// 2. 如果是零则删除，并在数组最后添加一个零
// 3. 注意删除0后需要保持当前索引并将遍历长度减1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     var length = nums.length
//     for(var i = 0; i < length; ++i) {
//         if (nums[i] == 0) {
//             nums.splice(i, 1)
//             nums.push(0)
//             i--
//             length--
//         }
//      }
// };

// 方法一：
// 1. 申请额外数组
// 2. 遍历数组，非零并按原有顺序存入，并统计零的个数
// 3.零放在末尾

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     var tempNums = []
//     var zeroNum = 0
//     for (var i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0 ) {
//             tempNums.push(nums[i])
//         } else {
//             zeroNum ++
//         }
//     }
//     var length = tempNums.length
//     for (var i = 0; i < zeroNum; i ++) {
//         tempNums.push(0)
//     }
//     for (var i = 0; i < nums.length; i++) {
//         nums[i] = tempNums[i]
//     }
// };