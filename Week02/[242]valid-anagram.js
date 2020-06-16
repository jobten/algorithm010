// 解法二： 利用哈希表

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    var map = {}
    s.split('').forEach(item => {
        map[item] = map[item] ? (map[item] + 1) : 1
    })

    for (var i = 0; i < t.length; i++) {
        var item = t[i]
        if (map[item] && map[item] > 0) {
            map[item]--
        } else {
            return false
        }
    }

    return true
};
//解法一:排序后对比
// 字符串排序需先转换成数组后排序

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//     if (s.length !== t.length) {
//         return false
//     }
//     return s.split('').sort().join('') === t.split('').sort().join('')
// };