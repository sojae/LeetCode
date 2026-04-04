/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 시간복잡도 O(log n)
    // 공간복잡도 O(1)

    let left = 0;
    let right = nums.length -1;

    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] < target){
            left += 1;
        }else{
            right -= 1;
        }
    }
    return left;
};