/**
 * 문제 내용
 * 시작 위치(sr, sc)의 색과 같은 영역을 찾아
 * 상하좌우로 퍼지면서 newColor로 바꾸는 문제
 *
 * 문제 풀이 과정(아이디어)
 * 1. 시작 색(originalColor) 저장
 * 2. 현재 위치가 범위 안에 있고, 같은 색이면
 * 3. 색을 바꾸고
 * 4. 상하좌우로 계속 탐색 (DFS)
 *
 * 시간복잡도: O(m * n)
 * 공간복잡도: O(m * n) (재귀 스택)
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const originalColor = image[sr][sc];

    // 같은 색이면 무한루프 방지
    if (originalColor === newColor) return image;

    const dfs = (r, c) => {
        // 1. 범위 밖
        if (
            r < 0 || r >= image.length ||
            c < 0 || c >= image[0].length
        ) return;

        // 2. 다른 색
        if (image[r][c] !== originalColor) return;

        // 3. 색 변경
        image[r][c] = newColor;

        // 4. 상하좌우 탐색
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    };

    dfs(sr, sc);

    return image;
};