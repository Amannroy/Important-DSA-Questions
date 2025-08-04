// Using Set

function hasCycle(head){
    const visited = new Set();

    let current = head;

    while(current){
        if(visited.has(current)){
            return true;
        }
        visited.add(current);
        current = current.next;
    }
    return false;
}

// TC = O(n), SC = O(n)


// Using Floyd's Algorithm

function hasCycleOptimize(head){
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
}

// TC = O(n), SC = O(1)