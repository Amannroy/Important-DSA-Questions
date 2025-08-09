function reverseBetween(head, left, right){
    // Base Case
    if(!head || left === right){
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let leftPre = dummy;
    let curr = head;

    for(let i=0;i<left-1;i++){
        leftPre = leftPre.next;
        curr = curr.next;
    }
    let preNode = null;
    let subListNode = curr;

    for(let i=0;i<=right-left;i++){
        let nextNode = curr.next;
        curr.next = preNode;
        preNode = curr;
        curr = nextNode;
    }

    leftPre.next = preNode;
    subListNode.next = curr;

    return dummy.next;
}