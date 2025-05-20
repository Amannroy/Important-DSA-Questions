// Brute Force

// function findMaxLength(nums) {
//   let maxLen = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let count0 = 0,
//       count1 = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (count0 === 0) {
//         count0++;
//       } else {
//         count1++;
//       }

//       if (count0 === count1) {
//         maxLen = Math.max(maxLen, j - i + 1);
//       }
//     }
//   }
//   return maxLen;
// }
// console.log(findMaxLength([0, 1, 0])); // 2

// TC = O(n^2)
// SC = O(1)


// Optimize
