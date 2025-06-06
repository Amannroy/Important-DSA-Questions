function middleNode(head){

    if(head === null){
        return null;
    }
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
console.log(middleNode([1,2,3,4,5])); // [3,4,5]


// TC = O(n)
// SC = O(1)