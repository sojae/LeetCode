/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length
    const cols = heights[0].length
    const pacific = new Set()
    const atlantic = new Set()

    function dfs(r, c, visited, prevHeight){
        if(visited.has(`${r},${c}`)) return      // 이미 방문
        if(r < 0 || r >= rows) return            // 범위 밖
        if(c < 0 || c >= cols) return            // 범위 밖
        if(heights[r][c] < prevHeight) return    // 낮으면 못 올라감
        //20    8
        visited.add(`${r},${c}`)  // 방문 표시

        dfs(r+1, c, visited, heights[r][c])
        dfs(r-1, c, visited, heights[r][c])
        dfs(r, c+1, visited, heights[r][c])
        dfs(r, c-1, visited, heights[r][c])
    }

    // 태평양: 왼쪽 열, 위쪽 행
    for(let r = 0; r < rows; r++) dfs(r, 0, pacific, heights[r][0])
    for(let c = 0; c < cols; c++) dfs(0, c, pacific, heights[0][c])

    // 대서양: 오른쪽 열, 아래쪽 행
    for(let r = 0; r < rows; r++) dfs(r, cols-1, atlantic, heights[r][cols-1])
    for(let c = 0; c < cols; c++) dfs(rows-1, c, atlantic, heights[rows-1][c])

    // 둘 다 방문한 칸 찾기
    const result = []
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(pacific.has(`${r},${c}`) && atlantic.has(`${r},${c}`)){
                result.push([r, c])
            }
        }
    }

    return result
};













