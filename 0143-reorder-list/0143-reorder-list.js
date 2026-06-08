/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next)return;

    let slow = head;
    let fast = head;
    // 중간찾기
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    console.log("slow",slow)
    console.log("fast",fast)
    let second = slow.next
    slow.next = null
    let prev = null
    while(second){
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }
    second = prev;

    let first = head;
    while(second){
        const tmp1 = first.next;
        const tmp2 = second.next;

        first.next = second;
        second.next = tmp1;

        first =tmp1;
        second = tmp2;
    }
};