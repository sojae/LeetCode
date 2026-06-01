/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map ={}
    for(const num of nums){
        map[num] = (map[num]||0)+1;
    }
    const sorted = Object.keys(map).sort((a,b)=>map[b]-map[a])
    return sorted.slice(0,k).map(str => Number(str));
    // map(Number) 는 이거랑 같은 말
    // .map(str => Number(str))
};