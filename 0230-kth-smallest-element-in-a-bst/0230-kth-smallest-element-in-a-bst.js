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
 * @param {number} k
 * @return {number}
  BST = 왼쪽 자식 < 부모 < 오른쪽 자식 규칙을 지키는 트리, 그래서 절반씩 잘라내며 빠르게 탐색 가능
   BST + 중위순회 (DFS)
   * 시간복잡도: O(h + k) - h는 트리 높이, k번째까지 탐색
 * 공간복잡도: O(h) - 재귀 콜스택
 */
var kthSmallest = function(root, k) {
    let result = null;
    let count = 0;

    const dfs =(node)=>{
        if(!node)return;
        dfs(node.left)
        
        count++;
        if(count === k){
            result = node.val
            return;
        }
        dfs(node.right)

    }
    dfs(root);
    return result
};