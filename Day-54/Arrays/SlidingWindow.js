// Sliding Window- Fixed Size
function maxSumSubarray(arr, k){
     let maxSum = 0;
     let windowSum = 0;

     for(let i=0;i<k;i++){
        windowSum += arr[i];
     }

     maxSum += windowSum;

     for(let i=k;i<arr.length;i++){
        windowSum += arr[i] - arr[i-k]; 
        maxSum = Math.max(maxSum, windowSum); 
     }
     return maxSum;
}
console.log(maxSumSubarray([2,1,5,1,3,2], 3)); // 9

// TC = O(n)
// SC = O(1)

// Sliding Window- Variable Size
function minSubArrayLen(target, arr){
    let start = 0;
    let currSum = 0;
    let minLen = Infinity;

    for(let end = 0;end<arr.length;end++){
        currSum += arr[end];

        while(currSum >= target){
            minLen = Math.min(minLen, end - start + 1);
            currSum -= arr[start];
            start++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2

// TC = O(n)
// SC = O(1)

