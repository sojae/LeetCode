/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let maxLangth = 0;
    for(const num of numSet){
        if(!numSet.has(num -1)){
            let currentNum = num;
            let currentLength = 1;

            while(numSet.has(currentNum+1)){
                currentNum++
                currentLength++
            }
            maxLangth = Math.max(maxLangth,currentLength);
        }
    }
    return maxLangth
};