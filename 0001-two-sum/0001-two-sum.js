/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 브루트포스 (이중포문)
    // 시간 복잡도 O(n2)
    // 공간 복잡도 O(1)
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i+1; j <nums.length; j++){
    //         if(nums[i]+nums[j]===target){
    //             return[i,j]
    //         }
    //     }
    // }
    
    // 객체 사용법
    // 시간 복잡도 O(n)
    // 공간 복잡도 O(n)
    const seen ={}
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
        if(complement in seen){
            return [seen[complement],i]
        }
        seen[nums[i]]=i;
    }
    return[]
    // 해시맵
    // 시간 복잡도 O(n)
    // 공간 복잡도 O(n)
    // const seen = new Map()
    // for(let i = 0; i < nums.length; i++){
    //     const complement = target - nums[i]
    //     if(seen.has(complement)){
    //         return[seen.get(complement),i]
    //     }
    //     seen.set(nums[i],i)
    // }
    // return []
};