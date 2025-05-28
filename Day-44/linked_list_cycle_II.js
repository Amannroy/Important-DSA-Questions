function detectCycle(head){
    let slow = head;
    let fast = head;

    if(!head || !head.next){
        return null;
    }

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            break;
        }
    }

        if(fast === null || fast.next === null){
            return null;
        }

        let start = head;
        while(start !== slow){
            start = start.next;
            slow = slow.next;
        }

        return start;
}
console.log(detectCycle([3,2,0,-4]));

// TC = O(n)
// SC = O(1)