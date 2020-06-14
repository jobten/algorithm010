// 方法三：排序 + 夹逼
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var set = new Set()
    var resultNums = []
    nums.sort(function(a, b){return a - b});
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break; // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        var value = -nums[i]
        var head = i + 1;
        var tail = nums.length -1;
        while(head < tail) {
            var targetNums = [nums[i], nums[head], nums[tail]]
            if (nums[head] + nums[tail] === value) {
                if (!set.has(targetNums + '')) {
                    resultNums.push(targetNums)
                    set.add(targetNums + '')
                }
            } 
            if (nums[head] + nums[tail] <= value){
                head++
            } else {
                tail--
            }
        }
    }
    return resultNums
};


// 方法二：双重暴力 + hash
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var set = new Set()
    var resultNums = []
    nums = nums.sort()
    for (var i = 0; i < nums.length - 2; i++) {
        var map = new Map()
        var target = -nums[i]
        for (var j = i + 1; j < nums.length; j ++) {
            var value = target - nums[j]
            var targetNums = [value, nums[i], nums[j]]
            if (map.has(value) && !set.has(String(targetNums.sort()))) {
                set.add(String(targetNums.sort()))
                resultNums.push(targetNums)
            } else {
                map.set(nums[j], nums[j])
            }
        }
    }
    return resultNums
};


// 方法一：暴力法
// 三重循环
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var resultNums = []
    var set = new Set();
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    var tempNums = [nums[i], nums[j], nums[k]]
                    var sortNumsStr = String(tempNums.sort())
                    if (!set.has(sortNumsStr)) {
                        resultNums.push(tempNums)
                        set.add(sortNumsStr)
                    }
                }
            }
        }
    }
    return resultNums
};
