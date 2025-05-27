// Brute Force
// function subarraySum(nums, k){
//     let count = 0;

//     for(let i=0;i<nums.length;i++){
//         let sum = 0;
//         for(let j=i;j<nums.length;j++){
//             sum += nums[j];

//             if(sum === k){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(subarraySum([1,1,1], 2)); // 2

// TC = O(n^2)
// SC = O(1)


// Optimize

function subarraySum(nums, k){
   let currentSum = 0;
   let count = 0;
   let prefixSumCount = new Map();

   prefixSumCount.set(0,1);

   for(let num of nums){
    currentSum += num;

    let neededSum = currentSum - k;
    
    if(prefixSumCount.has(neededSum)){
        count += prefixSumCount.get(neededSum);
    }
    prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);
   }
   return count;
}
console.log(subarraySum([1,2,3], 3));  // 2

// TC = O(n)
// SC = O(n)



