let hasCycle = function(head) {

    if(head === null || head.next === null){
        return false;
    }
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(fast === slow){
            return true;
        }
    }
    return false;
};