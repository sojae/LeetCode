/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 시간 복잡도 O(n)
    // 공간 복잡도 O(n) 최악의 경우 배열 전체를 Map에 저장
    const map = new Map() 
    for(let i = 0; i < nums.length; i++){
        const com = target - nums[i]
        if(map.has(com)){
            return [map.get(com),i]
        }
        map.set(nums[i],i)
    }
    return[]
    
};