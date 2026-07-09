/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 시간복잡도: O(m * n * 4^L) - L은 단어 길이
 * 공간복잡도: O(L) - 재귀 깊이
 */
var exist = function(board, word) {
    const rows = board.length
    const cols = board[0].length
    
    const dfs = (r,c,i) => {
        if(i === word.length)return true
        if(r < 0 || r >= rows)return false
        if(c < 0 || c >= cols)return false
        if(board[r][c] !== word[i])return false

        const tmp = board[r][c]
        board[r][c] = '#'

        const found = dfs(r+1,c,i+1) || dfs(r-1,c,i+1)||dfs(r,c+1,i+1) || dfs(r,c-1,i+1)

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