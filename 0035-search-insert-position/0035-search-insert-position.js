/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 시간복잡도 0(log n)
    // 공간복잡도 0(1)
    let left = 0; 
    // 탐색 시작 위치 (맨 앞)

    let right = nums.length - 1; 
    // 탐색 끝 위치 (맨 뒤)

    while (left <= right) {
        // 탐색 범위가 남아있는 동안 반복

        const mid = left + Math.floor((right - left) / 2);
        // 현재 탐색 범위의 가운데 인덱스

        if (nums[mid] === target) {
            // target을 찾은 경우
            return mid;
        }

        if (nums[mid] < target) {
            // target이 더 크므로
            // mid 포함 왼쪽 부분을 버림
            left = mid + 1;
        } else {
            // target이 더 작으므로
            // mid 포함 오른쪽 부분을 버림
            right = mid - 1;
        }
    }

    // target이 없는 경우
    // left가 들어갈 위치가 됨
    return left;
};