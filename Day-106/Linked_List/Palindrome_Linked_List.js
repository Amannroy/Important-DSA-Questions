let isPalindrome = function(head) {
    if(!head || !head.next) return true;

    // Find the middle using slow and fast pointer
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    while(slow){
        let nextTemp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTemp;
    }

    // Compare first half and the reversed second half
    let left = head; // Start pointer at the beginning of the list (first half)
    let right = prev; // Start pointer at the beginning of the reversed second half
    while(right){
        if(left.val !== right.val) return false;
        
        left = left.next;
        right = right.next;
    }
    return true;
};