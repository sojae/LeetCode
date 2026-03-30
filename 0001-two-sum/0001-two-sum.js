/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i+1; j < nums.length; j++){
    //         if(nums[i]+nums[j]===target){
    //             return [i,j]
    //         }
    //     }
    // }
    // return []
    // const map ={}
    // for(let i = 0; i < nums.length; i++){
    //     com = target - nums[i]

    //     if(com in map){
    //         return [map[com],i]
    //     }
    //     map[nums[i]]=i
    // }
    // return []
    const map = new Map()
        for(let i = 0; i < nums.length; i++){
        com = target - nums[i]
        if(map.has(com)){
            return [map.get(com),i]
        }
        map.set(nums[i],i)
        }
        return []
};