function sortList(head){
    // Base Case
    if(!head || !head.next) return head;

    // Split the list into two halves
    let mid = middleList(head);
    let rightHead = mid;

    // Sort each half
    let left = sortList(head);
    let right = sortList(rightHead);
    
    // Merge the sorted halves
    return merge(left, right);
}

// Function to find the middle node
function middleList(head){
    let prev = null;
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(prev) prev.next = null;
    return slow;
}

// Function to merge two sorted linked lists
function merge(l1,  l2){
    let dummy = new ListNode(0);
    let current = dummy;
    while(l1 && l2){
        if(l1.val < l2.val){
           current.next = l1;
           l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;

    return dummy.next;
}


// TC= O(nlogn)
// SC= O(nlogn)