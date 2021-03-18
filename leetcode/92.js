/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
  let virHead = new ListNode(-1);
  virHead.next = head;
  let pre = virHead;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next
  }
  let rightNode = pre;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  let leftNode = pre.next;
  let cur = rightNode.next;

  pre.next = null;
  rightNode.next = null;

  reverseList(leftNode);

  pre.next = rightNode;
  leftNode.next = cur;

  return virHead.next
};

function reverseList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}