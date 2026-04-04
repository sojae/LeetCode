/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    /**
 * 문제 내용
 * 이진 트리의 루트 root가 주어질 때,
 * 트리의 최대 깊이(maximum depth)를 반환하는 문제.
 *
 * 최대 깊이란?
 * 루트 노드부터 가장 깊은 리프 노드까지의
 * "노드 개수"를 의미한다.
 *
 * 문제 풀이 과정(아이디어)
 * 1. 현재 노드가 null이면 깊이는 0이다.
 * 2. 왼쪽 서브트리의 최대 깊이를 구한다.
 * 3. 오른쪽 서브트리의 최대 깊이를 구한다.
 * 4. 왼쪽/오른쪽 깊이 중 더 큰 값에 현재 노드 1을 더한다.
 *
 * 핵심
 * - 현재 노드의 깊이 = Math.max(왼쪽 깊이, 오른쪽 깊이) + 1
 *
 * 시간복잡도: O(n)
 * 공간복잡도: O(h)  // h는 트리 높이, 재귀 호출 스택
 */

    if(root === null){
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth,rightDepth)+1
    
};