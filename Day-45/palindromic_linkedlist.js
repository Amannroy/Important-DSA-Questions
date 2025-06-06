// Approach

// Find the middle using slow and fast pointer
// Reverse second half
// Compare first half and second if they are same return true else return false

function isPalindrome(head){
    if(!head || !head.next) return true;

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    while(slow){
        let nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    let left = head;
    let right = prev;
    
    while(right){
    if(left.val !== right.val) return false;

    left = left.next;
    right = right.next;
    }
    return true;
}

// TC = O(n)
//SC = O(1)