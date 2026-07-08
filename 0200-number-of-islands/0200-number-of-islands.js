/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length
    let count = 0
    const dfs=(r,c)=>{
        if(r < 0 || r >= rows)return
        if(c < 0 || c >= cols)return
        if(grid[r][c] !== '1')return

        grid[r][c] = '0'
        dfs(r+1, c)  // 아래
        dfs(r-1, c)  // 위
        dfs(r, c+1)  // 오른쪽
        dfs(r, c-1)  // 왼쪽
        

    }
    for(let r =0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === '1'){
                count++
                dfs(r,c)
            }
        }
    }
    return count
};