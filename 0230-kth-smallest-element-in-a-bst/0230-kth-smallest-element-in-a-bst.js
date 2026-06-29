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
 */
var kthSmallest = function(root, k) {
      let count = 0;
  let result = null;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);       // 왼쪽 먼저

    count++;
    if (count === k) {        // k번째 방문 = k번째로 작은 값
      result = node.val;
      return;
    }

    inorder(node.right);      // 오른쪽
  }

  inorder(root);
  return result;
};