/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let len = 0;
  let virHead = head;
  while (virHead) {
    len++;
    virHead = virHead.next;
  }
  let beg = len - k + 1;
  virHead = head;
  for (let i = 1; i <= beg; i++) {
    virHead = virHead.next
  }
  return virHead;
};