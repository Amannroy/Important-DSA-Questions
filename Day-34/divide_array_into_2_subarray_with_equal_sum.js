// Brute force
// function divideArraySubarray(arr){
//     let n = arr.length;
//     for(let i=0;i<n-1;i++){
//         let sum1 = 0;
//         let sum2 = 0;
        
//         for(let j=0;j<=i;j++){
//             sum1 += arr[j];
//         }
//         for(let j=i+1;j<n;j++){
//             sum2 += arr[j];
//         }
//         if(sum1 === sum2){
//             return 1;
//         }
//     }
//     return 0;
// }
// console.log(divideArraySubarray([3,4,-2,5,8,20,-10,8])); // 1

// TC = O(n^2)
// SC = O(1)

// Optimize (Prefix Sum)
function divideArraySubarray(arr){
   let n = arr.length;
   let totalSum = 0;
   for(let i=0;i<n;i++){
      totalSum += arr[i];
   }

   let prefix = 0;
   let ans = 0;
   for(let i=0;i<n-1;i++){
    prefix += arr[i];
    ans = totalSum - prefix;

    if(ans === prefix){
        return 1;
    }
   }
   return 0;
}
console.log(divideArraySubarray([3,4,-2,5,8,20,-10,8]));
