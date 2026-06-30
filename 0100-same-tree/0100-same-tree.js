/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 시간복잡도: O(n) - 모든 노드를 한 번씩 방문
 * 공간복잡도: O(h) - 재귀 콜스택, h는 트리 높이 (최악 O(n))
 */
var isSameTree = function(p, q) {
    if(p === null && q === null)return true;
    if(p === null || q === null)return false;
    if(p.val !== q.val)return false;
    
    return isSameTree(p.left,q.left) && isSameTree(p.right, q.right)

};