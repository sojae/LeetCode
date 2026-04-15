/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next)return head;

    const newHead = reverseList(head.next);
    
    head.next.next = head; // 뒤집기
    head.next = null;      // 기존 연결 끊기

    return newHead;
};