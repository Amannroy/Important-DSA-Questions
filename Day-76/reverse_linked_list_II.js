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
var reverseBetween = function(head, left, right) {
    // Base Case
    if (head === null || left === right) {
        return head;
    }

    // Dummy node for edge cases
    let dummy = new ListNode(0);
    dummy.next = head;

    // Move to node just before left
    let leftPre = dummy;
    let curr = head;
    for (let i = 0; i < left - 1; i++) {
        leftPre = leftPre.next;
        curr = curr.next;
    }

    // Reverse sublist
    let preNode = null;
    let subListNode = curr;
    for (let i = 0; i <= right - left; i++) {
        let nextNode = curr.next;
        curr.next = preNode;
        preNode = curr;
        curr = nextNode;
    }

    // Reconnect reversed part
    leftPre.next = preNode;
    subListNode.next = curr;

    return dummy.next;
};


// TC = O(n)
// SC = O(1)