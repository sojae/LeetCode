/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = new Array(nums.length).fill(1)

    // 왼쪽 다 곱하기
    let left = 1
    for(let i = 0; i<nums.length; i++){
        result[i] = left
        left *= nums[i]
    }

    // 오른쪽 다곱하기
    let right = 1
    for(let i = nums.length -1; i>=0; i--){
        result[i] *= right
        right *= nums[i]
    }
    return result
};