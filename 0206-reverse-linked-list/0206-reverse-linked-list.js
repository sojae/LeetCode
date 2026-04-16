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
/**
 * 문제 내용
 * 단일 연결 리스트를 뒤집어서 반환하는 문제
 *
 * 문제 풀이 과정 (아이디어)
 * 1. 재귀로 끝 노드까지 이동
 * 2. 마지막 노드부터 하나씩 방향을 뒤집는다
 * 3. next를 먼저 뒤집고, 기존 연결을 끊는다
 *
 * 시간복잡도: O(n)
 * 공간복잡도: O(n) (재귀 스택)
 */

var reverseList = function(head) {
    // [종료 조건]
    // head가 null이거나 마지막 노드면 그대로 반환
    // 예: reverseList(5) → 5 리턴
    if (!head || !head.next) return head;

    // [재귀 호출]
    // "나(head)를 제외한 나머지를 먼저 뒤집어라"
    const newHead = reverseList(head.next);

    // ============================
    // 여기부터 "되돌아오면서" 실행됨
    // ============================

    // 예시 전체 흐름:
    // 1 → 2 → 3 → 4 → 5

    // ----------------------------
    // [case: head = 4]
    // 현재 상태:
    // 4 → 5 → null
    //
    // reverseList(5) 결과:
    // newHead = 5
    // ----------------------------

    head.next.next = head;
    // head = 4
    // head.next = 5
    // => 5.next = 4
    //
    // 결과 (임시 상태, 사이클):
    // 4 → 5
    // ↑   ↓
    // └───┘

    head.next = null;
    // 4.next = null
    //
    // 결과:
    // 5 → 4 → null

    // ----------------------------
    // [case: head = 3]
    // 현재 상태:
    // 3 → 4
    // (이미 뒤는 5 → 4 상태)
    // ----------------------------

    // head.next.next = head
    // 4.next = 3
    //
    // 중간 상태:
    // 5 → 4 → 3
    //          ↑
    //          └─ (3은 아직 4 가리킴)

    // head.next = null
    // 3.next = null
    //
    // 결과:
    // 5 → 4 → 3 → null

    // ----------------------------
    // [case: head = 2]
    //
    // 3.next = 2
    // 2.next = null
    //
    // 결과:
    // 5 → 4 → 3 → 2 → null

    // ----------------------------
    // [case: head = 1]
    //
    // 2.next = 1
    // 1.next = null
    //
    // 결과:
    // 5 → 4 → 3 → 2 → 1 → null

    // ----------------------------

    // 항상 처음 끝노드(5)를 반환
    return newHead;
};