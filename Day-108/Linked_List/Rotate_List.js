let rotateRight = function(head, k) {
    // 🔹 Step 0: Edge Case - if list is empty, has one node, or no rotation needed
    if (!head || !head.next || k === 0) return head;

    // 🔹 Step 1: Find the length of the linked list and get the tail node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // 🔹 Step 2: Make the list circular by connecting the tail to the head
    tail.next = head;

    // 🔹 Step 3: Normalize k to avoid unnecessary rotations
    k = k % length; // If k > length, rotating k times = rotating k % length times

    // 🔹 Step 4: Find the new tail node (length - k - 1 steps from current head)
    let stepsToNewHead = length - k;
    let newTail = head;
    for (let i = 0; i < stepsToNewHead - 1; i++) {
        newTail = newTail.next;
    }

    // 🔹 Step 5: Set the new head (node after new tail)
    let newHead = newTail.next;

    // 🔹 Step 6: Break the circular list by setting newTail.next to null
    newTail.next = null;

    // 🔹 Step 7: Return the new head of the rotated list
    return newHead;
};

// TC = O(n)
// SC = O(1)