/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 가로 세로열만들기
    // 그래프 + 백트래킹 문제네
    const rows = board.length
    const cols = board[0].length

    const dfs = (r,c,i) => {
        if(i === word.length)return true

        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = 2 1 5 > i = 5 word.length 5 리턴 true
        if(r < 0 || r >= rows||c < 0 || c >=cols)return false
        if(board[r][c] !== word[i])return false
        

        const tmp = board[r][c]
        // 0 0 0 tmp = a
        // 0 0 0 = 0 1 1 tmp = b 
        // 0 0 0 = 0 1 1  = 0 2 2  = tmp = c
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3 tmp = c
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = tmp = e
        board[r][c] = '#'
        // 0 0 0 a = #
        // 0 0 0 = 0 1 1 b = '#'
        // 0 0 0 = 0 1 1  = 0 2 2  = c = '#'
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = c ='#'
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = e = '#'
        const found = dfs(r+1,c,i+1)||
        dfs(r-1,c,i+1)||
        dfs(r,c+1,i+1)||
        dfs(r,c-1,i+1)
        // 0 0 0 = 1 0 1 리턴
        // 0 0 0 = -1 0 1 리턴
        // 0 0 0 = 0 1 1 b 
        // 0 0 0 = 0 1 1 = 1 1 2 f c 틀리니까 리턴 
        // 0 0 0 = 0 1 1 = -1 1 2 리턴
        // 0 0 0 = 0 1 1  = 0 2 2 c
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3 c
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 e
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = 325 리턴
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = 125 리턴
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = 235 리턴
        // 0 0 0 = 0 1 1  = 0 2 2 c = 1 2 3  = 2 2 4 = 215 d

        // abcced
        // '#'bce
        // sfcs
        // adee


        board[r][c] = tmp
        return found
    }
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(dfs(r,c,0))return true
        }
    }
    return false
};