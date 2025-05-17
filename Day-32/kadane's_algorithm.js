// Brute  Force
function maxSubArrayBruteForce(nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j]; // sum from i to j
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

// TC = O(n^2)
// SC = O(1)


// Optimized one
function maxSubArrayKadane(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// TC = O(n)
// SC = O(1)