let copyRandomList = function (head) {
  //If the head is null
  if(!head){
    return null;
  }

  // Creating new node with same value in the middle
  let current = head;
  while(current){
    let newNode = new Node(current.val);

    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }

  // Assign random pointers to the copied values
  current = head;
  while(current){
    if(current.random){
        current.next.random = current.random.next;
    }
    current = current.next.next;
  }
  // Seperate the two lists
  let original = head;
  let copy = head.next;
  let newHead = head.next;

  while(original){
    original.next = original.next.next;

    if(copy.next){
        copy.next = copy.next.next;
    }
    original = original.next;
    copy = copy.next;
  }
  return newHead;
};