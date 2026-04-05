/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const first = findFirst(nums,target)
    const last = findLast(nums,target)

    return [first, last]
};

function findFirst(nums,target){
    let left = 0;
    let right = nums.length -1;
    let result = -1;

    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);

        if(nums[mid] === target){
            result = mid;
            right = mid -1;//“왼쪽에 더 같은 값 있나?”
        }else if(nums[mid] < target){
            left = mid +1;
        }else{
            right = mid -1;
        }
    }
    return result;
}
function findLast(nums,target){
    let left = 0;
    let right = nums.length -1;
    let result = -1;

    while(left <= right){
        const mid = left + Math.floor((right - left) / 2);

        if(nums[mid] === target){
            result = mid;
             left = mid +1; //“오른쪽에 더 같은 값 있나?”
        }else if(nums[mid] < target){
            left = mid +1;
        }else{
            right = mid -1;
        }
    }
    return result;
}