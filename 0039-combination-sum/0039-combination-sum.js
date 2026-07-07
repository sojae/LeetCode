/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    const dfs = (start, current, remain) =>{
        if(remain === 0){
            result.push([...current])
            return
        }
        if(remain < 0){
            return
        }
        
        for(let i = start; i < candidates.length; i++){
            current.push(candidates[i])
            dfs(i, current, remain - candidates[i])
            current.pop()
        }

    }
    dfs(0, [], target)
    return result
};