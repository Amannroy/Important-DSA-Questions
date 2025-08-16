var connect = function(root) {
      if(!root) return null;

    let leftMost = root;

    while(leftMost.left){   // go level by level
        let head = leftMost;

        while(head){  // go node by node in the same level
            head.left.next = head.right;  // connect left → right child

            if(head.next){  // if next exists, connect right → next.left
                head.right.next = head.next.left;
            }
            head = head.next;  // move to next node in same level
        }
        leftMost = leftMost.left;  // go down one level
    }
    return root;
};