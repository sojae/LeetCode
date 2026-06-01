/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const newSet = new Set(nums);
    let longest = 0;

    for(const num of newSet){
        if(!newSet.has(num-1)){
            let current = num;
            let streak = 1;

            while(newSet.has(current + 1)){
                current++;
                streak++;
            }
            longest = Math.max(longest,streak)
        }
    }
    return longest;
    
};