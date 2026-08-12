/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const newSet = new Set(nums)
    let result = 0
    
    for(const num of newSet){
        if(!newSet.has(num-1)){
            let current = num
            let count = 1
            while(newSet.has(current+1)){
                current++
                count++
            }
           result = Math.max(result,count)
        }
    }
    return result
};