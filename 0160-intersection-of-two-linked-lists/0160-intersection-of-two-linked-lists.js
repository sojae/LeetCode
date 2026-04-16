/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 /**
 * 문제 내용
 * 두 연결 리스트가 만나는 지점을 찾는 문제
 *
 * 문제 풀이 과정(아이디어)
 * 1. pA는 listA, pB는 listB에서 시작
 * 2. 끝에 도달하면 서로 반대 리스트로 이동
 * 3. 길이가 맞춰지면서 결국 같은 지점에서 만남
 *
 * 시간복잡도: O(n + m)
 * 공간복잡도: O(1)
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA
    let b = headB

    while(a !== b){
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
    
};