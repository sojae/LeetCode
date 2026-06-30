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
 * @return {number[][]}
 BFS(큐) = 큐에 노드를 넣고 빼면서, 가까운 레벨부터 차례로 옆으로 훑는 탐색 방식
 * 시간복잡도: O(n) - 모든 노드를 한 번씩 방문
 * 공간복잡도: O(n) - 큐에 최대 n/2개 노드 저장 (마지막 층)
 */
var levelOrder = function(root) {
    if(!root)return []

    const result = [];
    const queue = [root];

    while(queue.length >0){
        const levelSize = queue.length;
        const level = [];
        
        for(let i = 0; i < levelSize; i++){
            const node = queue.shift();
            level.push(node.val)

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(level)
    }
    return result;
};