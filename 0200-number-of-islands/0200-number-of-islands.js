/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length
    const cols = grid[0].length

    let count = 0;

    const bfs = (r,c)=>{
        const queue = [[r,c]]
        grid[r][c] = '0'
        
        while(queue.length > 0){
            const [row,col] = queue.shift()
            const directions = [[1,0],[-1,0],[0,1],[0,-1]]
            for(const [dr,dc] of directions){
                const nr = row + dr
                const nc = col + dc
                if(nr < 0 || nr >= rows|| nc < 0 || nc >= cols)continue
                if(grid[nr][nc] !== '1')continue

                queue.push([nr,nc])
                grid[nr][nc] = '0'
            }

        }
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === '1'){
                count++
                bfs(r,c)
            }
        }
    }
    return count
};
