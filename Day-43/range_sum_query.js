// Brute Force

// class NumArray {
//     constructor(nums) {
//         this.nums = nums;
//     }
    
//     sumRange(left, right) {
//         let sum = 0;
//         // Loop over from left to right indices as specified in the query
//         for (let i = left; i <= right; i++) {
//             // Accumulate sum for this query range
//             sum += this.nums[i];
//         }
//         return sum;
//     }
// }


// Optimize
class NumArray {
    constructor(nums) {
        // Initialize prefixSums array with one extra space for ease of use
        this.prefixSums = new Array(nums.length + 1).fill(0);
        // Compute prefix sums
        for (let i = 0; i < nums.length; i++) {
            this.prefixSums[i + 1] = this.prefixSums[i] + nums[i];
        }
    }
    
    sumRange(left, right) {
        // Return the sum between left and right indices using the prefix sum array
        // Subtract the cumulative sum up to (left - 1) from cumulative sum up to right.
        return this.prefixSums[right + 1] - this.prefixSums[left];
    }
}

// Example usage:
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // 1
console.log(numArray.sumRange(2, 5)); // -1
console.log(numArray.sumRange(0, 5)); // -3
