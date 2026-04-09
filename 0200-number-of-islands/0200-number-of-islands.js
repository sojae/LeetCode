/**
 * 문제 내용
 * 2차원 grid에서 섬("1")의 개수를 구하는 문제
 *
 * 문제 풀이 과정(아이디어)
 * 1. grid를 전체 순회한다.
 * 2. "1"을 만나면 섬 하나를 찾은 것이므로 count 증가
 * 3. DFS로 연결된 모든 "1"을 방문 처리해서 "0"으로 바꾼다.
 * 4. 순회가 끝나면 count 반환
 *
 * 시간복잡도: O(m * n)
 * 공간복잡도: O(m * n)   // 재귀 스택 최악 기준
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let count = 0;

    const dfs = (r, c) => {
        // 범위 밖이면 종료
        if (
            r < 0 || r >= grid.length ||
            c < 0 || c >= grid[0].length
        ) {
            return;
        }

        // 물이거나 이미 방문한 곳이면 종료
        if (grid[r][c] === "0") {
            return;
        }

        // 방문 처리
        grid[r][c] = "0";

        // 상하좌우 탐색
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
};