/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i]===target){
    //         return i
    //     }
    // }
    // return -1;
    // 시간복잡도 0(log n) 
    // 공간복잡도 0(1)
    let left = 0;
    let right = nums.length -1;

    while(left <= right){
        const mid = left + Math.floor((right - left)/2)

        if(nums[mid]===target){
            return mid;
        }
        if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
};