/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const find = findFirst(nums,target)
    const last = findLast(nums,target)

    return [find,last]
};
function findFirst(nums, target){
    left = 0;
    right = nums.length -1;
    answer = -1;
    while(left <= right){
        const mid = left + Math.floor((right - left) / 2)
        
        if(nums[mid] === target){
            answer = mid;
            right = mid -1;// 더 왼쪽 탐색 
        }else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        
}
return answer;}

function findLast(nums, target){
    left = 0;
    right = nums.length -1;
    answer = -1;
    while(left <= right){
        const mid = left + Math.floor((right - left) / 2)
        
        if(nums[mid] === target){
            answer = mid;
            left = mid +1;// 더 오른쪽 탐색 
        }else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    
}
    return answer;}
   

