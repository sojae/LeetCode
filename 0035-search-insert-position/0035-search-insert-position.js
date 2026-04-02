/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    // 맨처음
    let right = nums.length -1;
    // 맨 마지막

    while(left <= right){
        // 왼쪽보다 크거나 같아질때까지
        const mid = left + Math.floor((right-left)/2);

        if(nums[mid] === target){
            return mid;
        }

        if(nums[mid] < target){
            // 타겟 보다 작을경우 맨처음에서 가운데까지 버림
            left = mid + 1;
        }else{
            // 타겟이 더 작을경우 맨마지막 부터 중간까지 버림
            right = mid - 1;
        }
    }
    return left;
};