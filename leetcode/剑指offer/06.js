/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let arr = [];
    while(head.val){
        arr.unshift(head.val);
        head = head.next;
    }
    return arr;
};