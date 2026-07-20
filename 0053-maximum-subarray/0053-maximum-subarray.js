/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let curNum = nums[0]
    let maxNum = nums[0]
    // [5,4,-1,7,8]
    for(let i = 1; i < nums.length; i++){
        curNum = Math.max(nums[i], curNum + nums[i])
        // 
        maxNum = Math.max(maxNum, curNum)
       
    }
    return maxNum
};