// Brute Force
// function maxAverage(nums, k){
//     let n = nums.length;
//     let maxAvg = -Infinity;
//     for(let i=0;i<=n-k;i++){
//         let sum = 0;
//         for(let j=i;j<i+k;j++){
//            sum += nums[j];
//         }
//         maxAvg = Math.max(maxAvg, sum / k);
//     }
//     return maxAvg;
    
// }
// console.log(maxAverage([1,12,-5,-6,50,3], 4)); // 12.75

// TC = (N * k)
// SC = O(1)


// Optimize (Sliding Window)
function maxAverage(nums, k){
    let sum = 0;
    let maxSum = Infinity;
    for(let i=0;i<k;i++){
       sum += nums[i];
    }
    maxSum = sum;

    for(let i=k;i<nums.length;i++){
        sum += nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;

}
console.log(maxAverage([1,12,-5,-6,50,3], 4)); // 12.75

// TC = O(n)
// SC = O(1)

