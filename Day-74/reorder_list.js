function reorderList(head){
    if(head === null || head.next === null){
        return;
    }

    // 1) Find the middle node
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2) Reverse the second half of the node
    let prev = null;
    let curr = slow.next;
    slow.next = null; // break the list into two halves

    while(curr){
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // 3) Merge the first half and second half of the node
    let first = head;
    let second = prev;

    while(second){
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;

        first = temp1;
        second = temp2;
    }

}

// TC = O(n)
// SC = O(1)