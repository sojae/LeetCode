/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 시간복잡도 O(n) n개 만큼 순회하기 때문
    // 공간복잡도 O(n) Set에 최대 n개를 저장하기 때문
    // return nums.length !== new Set(nums).size
    const seen = new Set()
    for(const num of nums){
        if(seen.has(num))return true
        seen.add(num)
    }
    return false
};