/**
 * @param {number[]} nums
 * @return {number}
 */
//  새로시작 = 현재 숫자 = nums[i]
// 이어가기 = 이전합 + 현재숫자 = currentNum + nums[i]

// 이 둘을 비교해야 하니까
// Math.max(nums[i], currentNum + nums[i])
var maxSubArray = function(nums) {
    let curSum = nums[0]
    let maxSum = nums[0]
    for(let i = 1; i < nums.length; i++){
        curSum = Math.max(nums[i],curSum + nums[i])

        maxSum = Math.max(maxSum,curSum)
    }
    return maxSum
};