function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
  
    // sum of first window
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    maxSum = windowSum;
  
    // Slide the window
    for (let i = k; i < arr.length; i++) {
      windowSum = windowSum - arr[i - k] + arr[i];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  let result = maxSumSubarray([2, 1, 5, 1, 3, 2], 3);
  console.log("Maximum sum is:", result); // Output: 9
  