function reverseList(head){
    let prev = null;
    let curr = head;

    while(curr !== null){
      let nextNode = curr.next;
      curr.next = prev;
      prev = curr;   
      curr = nextNode; 
    }
    return prev;
}

// TC = O(n)
// SC = O(n)