let topKFrequent = function(nums, k) {
    // Step 1: Count frequencies
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // --- Min Heap Implementation ---
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        size() { return this.heap.length; }

        // swap two nodes
        swap(i, j) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        // parent/children indices
        parent(i) { return Math.floor((i - 1) / 2); }
        left(i) { return 2 * i + 1; }
        right(i) { return 2 * i + 2; }

        // push into heap
        push(node) {
            this.heap.push(node);
            this.bubbleUp();
        }

        bubbleUp() {
            let i = this.heap.length - 1;
            while (i > 0 && this.heap[i][1] < this.heap[this.parent(i)][1]) {
                this.swap(i, this.parent(i));
                i = this.parent(i);
            }
        }

        // remove min
        pop() {
            if (this.size() === 1) return this.heap.pop();
            let top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);
            return top;
        }

        bubbleDown(i) {
            let smallest = i;
            let l = this.left(i), r = this.right(i);

            if (l < this.size() && this.heap[l][1] < this.heap[smallest][1]) {
                smallest = l;
            }
            if (r < this.size() && this.heap[r][1] < this.heap[smallest][1]) {
                smallest = r;
            }
            if (smallest !== i) {
                this.swap(i, smallest);
                this.bubbleDown(smallest);
            }
        }
    }

    // Step 2: Build MinHeap with top k
    let heap = new MinHeap();
    for (let [num, freq] of freqMap.entries()) {
        heap.push([num, freq]);
        if (heap.size() > k) heap.pop();
    }

    // Step 3: Extract result
    let result = [];
    while (heap.size() > 0) {
        result.push(heap.pop()[0]);
    }

    return result;
};