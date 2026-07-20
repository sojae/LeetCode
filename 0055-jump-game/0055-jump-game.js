/**
 * @param {number[]} nums
 * @return {boolean}
  시간복잡도 O(n)
  공간복잡도 O(1)
 */
var canJump = function(nums) {
    let maxNum = 0

    for(let i = 0; i < nums.length; i++){
        if(i > maxNum)return false
        maxNum = Math.max(maxNum, i + nums[i])
    }
    return true
};