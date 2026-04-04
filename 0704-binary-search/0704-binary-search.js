/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 시간복잡도 O(log n)
    // 공간복잡도
    // 풀이
    // 맨 끝과 맨마지막을 구하고 중간값을 구해서 중간값이 타겟보다 작으면 왼쪽을 잘라내고 중간값+1 크면 오른쪽잘라내고 중간값 -1
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
    return -1;
};