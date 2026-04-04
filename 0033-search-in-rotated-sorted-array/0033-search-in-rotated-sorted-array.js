/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /**
 * 문제 내용
 * 회전된 정렬 배열에서 target을 찾고 index 반환
 * 없으면 -1
 *
 * 문제 풀이 과정(아이디어)
 * 1. mid 기준으로 한쪽은 항상 정렬되어 있음
 * 2. 정렬된 쪽에 target이 있는지 판단
 * 3. 있으면 그쪽으로, 없으면 반대쪽으로 탐색
 * 시간복잡도 O(log n)
 * 공간복잡도 O(1)
 */

var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;

    while(left <= right){
        const mid  = left + Math.floor((right - left) / 2);

        if(nums[mid] === target){
            return mid;
        }
        // 왼쪽이 정렬된 경우
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target < nums[mid]){
                // target이 left ~ mid 사이에 있다
                right = mid -1;
            }else{
                left = mid +1;
            }
        }else{
            // 오른쪽이 정렬된 경우
            if(nums[mid] < target && target <= nums[right]){
                // target이 mid ~ right 사이에 있다
                left = mid + 1;
            }else{
                right = mid -1;
            }
        }
    }
    return -1;
};