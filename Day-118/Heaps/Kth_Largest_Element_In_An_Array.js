class MinHeap {
  constructor() {
    this.heap = []; // Initialize an empty array to store heap elements
  }

  // Helper function to get index of parent
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // Helper function to get index of left child
  left(i) {
    return 2 * i + 1;
  }

  // Helper function to get index of right child
  right(i) {
    return 2 * i + 2;
  }

  // Function to insert a new value into the heap
  insert(val) {
    this.heap.push(val); // Add the new value at the end
    this.heapifyUp(this.heap.length - 1); // Restore heap property by moving up
  }

  // Function to maintain heap property from bottom to top
  heapifyUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      // Swap if child is smaller than parent
      [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i); // Move to parent index
    }
  }

  // Function to extract the minimum (top) element
  extractMin() {
    if (this.heap.length === 0) return null;

    const min = this.heap[0]; // Top element
    const end = this.heap.pop(); // Remove last element

    if (this.heap.length > 0) {
      this.heap[0] = end; // Move last to top
      this.heapifyDown(0); // Restore heap property by moving down
    }

    return min; // Return min value
  }

  // Function to maintain heap property from top to bottom
  heapifyDown(i) {
    const size = this.heap.length;
    let smallest = i;
    const left = this.left(i);
    const right = this.right(i);

    if (left < size && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < size && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest); // Continue heapifying
    }
  }

  // Function to get the minimum element without removing
  peek() {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  // Return current size of heap
  size() {
    return this.heap.length;
  }
}
var findKthLargest = function(nums, k) {
    const pq = new MinHeap(); // Min heap by default

    for (let num of nums) {
        pq.insert(num); // Push number
        if (pq.size() > k) {
            pq.extractMin(); // Remove the smallest element
        }
    }

    return pq.peek(); // Return the k-th largest
};