/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let n1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3)
n1.next = n2;
n2.next = n3;
let m1 = new ListNode(1);
let m2 = new ListNode(3);
let m3 = new ListNode(4);
m1.next = m2;
m2.next = m3;
var mergeTwoLists = function(n1, m1) {
    
};
mergeTwoLists(n1,m1);