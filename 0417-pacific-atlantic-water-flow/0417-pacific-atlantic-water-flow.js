/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length
    const cols = heights[0].length
    const pacific = new Set()  //태평양 도달 가능한 칸들
    const atlantic = new Set() //대서양 도달 가능한 칸들
    
    const dfs = (r,c,visited,prevHeight) =>{
        if(visited.has(`${r},${c}`))return
        if(r < 0 || r >=rows)return
        if(c < 0 || c >=cols)return
        if(heights[r][c] < prevHeight)return

        visited.add(`${r},${c}`) 
        dfs(r+1,c,visited,heights[r][c])
        dfs(r-1,c,visited,heights[r][c])
        dfs(r,c+1,visited,heights[r][c])
        dfs(r,c-1,visited,heights[r][c])
    }

    for(let r = 0; r < rows; r++)dfs(r,0,pacific, heights[r][0])
    for(let c = 0; c < cols; c++)dfs(0,c,pacific, heights[0][c])
    for(let r = 0; r < rows; r++)dfs(r, cols-1, atlantic, heights[r][cols-1])
    for(let c = 0; c < cols; c++)dfs(rows-1, c, atlantic, heights[rows-1][c])

    const result = []
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)){
                result.push([r,c])
            }
        }
    }
    
    return result
};