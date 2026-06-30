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
 * 시간복잡도: O(n) - 모든 노드를 한 번씩 방문
 * 공간복잡도: O(h) - 재귀 콜스택, h는 트리 높이 (최악 O(n))
 */
var maxDepth = function(root) {
    if(root ===null)return 0
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    return Math.max(left,right)+1
};