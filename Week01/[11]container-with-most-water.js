// 方法二：双指针法
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var head = 0
    var tail = height.length - 1
    var max = 0
    var h = 0
    var w = 0
    while(head < tail) {
        w = tail - head
        if (height[tail] > height[head]) {
            h = height[head]
            head ++
        } else {
            h = height[tail]
            tail -- 
        }
        max = Math.max(max, h * w)
    }
    return max
};
// 方法一：暴力求解

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for (var i = 0; i < height.length-1; i ++) {
        for (var j = i + 1; j < height.length; j++) {
            var h = (height[j] - height[i] > 0) ? height[i] : height[j]; 
            var area = h  * (j - i)
            if (area > max) {
                max = area
            }
        } 
    }
    return max;
};
