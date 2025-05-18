// Brute Force
//  function circularSubarraySum(arr) {
//         // code here
//         let n = arr.length;
//         let maxSum = -Infinity;
        
//         let circularArray = arr.concat(arr);
        
//         for(let i=0;i<n;i++){
//             let currentSum = 0;
//             for(let j=i;j<i+n;j++){
//                 currentSum += circularArray[j];
//                 maxSum = Math.max(maxSum, currentSum);
//             }
//         }
//         return maxSum;
//     }
//     console.log(circularSubarraySum([8, -8, 9, -9, 10, -11, 12])); // 2

    // TC = O(n^2) 
    // SC = O(n) 
    
