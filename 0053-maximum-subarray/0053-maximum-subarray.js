/**
 * @param {number[]} nums
 * @return {number}
 시간복잡도 O(n)
 공간복잡도 O(1)
 */
var maxSubArray = function(nums) {
    let currentNum = nums[0]
    let maxNum = nums[0]

    for(let i = 1; i<nums.length; i++){
        currentNum = Math.max(nums[i], currentNum + nums[i])
        maxNum = Math.max(maxNum, currentNum)
    }
    return maxNum
};