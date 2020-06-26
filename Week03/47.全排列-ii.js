/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const state = [];
    const res = [];
    const used = {};
    
    nums.sort((a,b) =>{
        return a-b;
    })
    
    function recursive(pos) {
        if (pos === nums.length) return res.push([...state])
        let arr;
        for(let i=0; i< nums.length; i++) {
        if (!used[i]){
            used[i] = true;
            state.push(nums[i]);
            if (JSON.stringify(arr) !== JSON.stringify(state)){
                arr = [...state];
                recursive(pos+1);
            }
            state.pop();
            used[i] = false;
        }
        }
    }

    recursive(0);
    return res;
};
// @lc code=end

