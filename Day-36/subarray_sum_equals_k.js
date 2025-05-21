// Brute Force

// function subarraySum(nums, k){
//     let count = 0;
//     let n = nums.length;

//     for(let i=0;i<n;i++){
//         let sum = 0;
//         for(let j=i;j<n;j++){
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
     let count = 0;
     let sum = 0;

     let prefixSum = new Map();
     
     prefixSum.set(0, 1);

     for(let i=0;i<nums.length;i++){
        sum += nums[i];

        if(prefixSum.has(sum - k)){
            count += prefixSum.get(sum - k);
        }

        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
     }
     return count;
}
console.log(subarraySum([1,1,1], 2)); // 2

// TC = O(n)
// SC = O(n)
