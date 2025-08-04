// Node class represents each node in the linked list
class ListNode {
    constructor(value) {
        this.value = value; // Stores the data of the node
        this.next = null;   // Points to the next node (null by default)
    }
}

// LinkedList class manages the overall list
class LinkedList {
    constructor() {
        this.head = null; // Initially, the list is empty
    }

    // Adds a new node with the given value at the end of the list
    append(value) {
        const newNode = new ListNode(value); // Create a new node

        // If the list is empty, make this new node the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // Otherwise, traverse to the end of the list
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        // Append the new node at the end
        current.next = newNode;
    }

    // Deletes the first node found with the given value
    delete(value) {
        if (!this.head) return; // If list is empty, do nothing

        // If the head itself is the node to delete
        if (this.head.value === value) {
            this.head = this.head.next; // Move head to next node
            return;
        }

        // Traverse to find the node just before the one to delete
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        // If the node was found, skip it (unlink it)
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Finds and returns the value of the middle node
    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        // Move fast by 2 steps and slow by 1 step
        // When fast reaches end, slow will be at the middle
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Return middle node's value or null if list is empty
        return slow ? slow.value : null;
    }

    // Reverses the entire linked list
    reverse() {
        let prev = null;
        let current = this.head;

        // Iterate through the list and reverse links
        while (current) {
            let nextNode = current.next; // Store next node
            current.next = prev;         // Reverse the current node's pointer
            prev = current;              // Move prev to current
            current = nextNode;          // Move to next node
        }

        // Update head to the new front of the list
        this.head = prev;
    }

    // Prints the linked list in a readable format
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

// ✅ Testing the LinkedList

const list = new LinkedList();

// Add nodes to the list
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

console.log("Original List:");
list.printList(); // 10 -> 20 -> 30 -> 40 -> 50 -> null

// Find and print the middle element
console.log("Middle Element:", list.findMiddle()); // Should be 30

// Delete a node with value 30
list.delete(30);
console.log("After Deleting 30:");
list.printList(); // 10 -> 20 -> 40 -> 50 -> null

// Reverse the linked list
list.reverse();
console.log("After Reversing:");
list.printList(); // 50 -> 40 -> 20 -> 10 -> null
