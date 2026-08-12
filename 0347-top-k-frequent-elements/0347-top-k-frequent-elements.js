/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map()

    for(const num of nums){
        count.set(num, (count.get(num)||0)+1)
    }
    const entries = [...count.entries()]
    const topK = entries.sort((a,b)=>b[1] - a[1]).slice(0,k)
    const result = topK.map(([num, freq]) => num)

    return result

};