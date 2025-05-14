// Brute Force

// function findMajority(arr) {
//   // Your code goes here
//   let n = arr.length;
//   let votes = Math.floor(n / 3);
//   let freqMap = {};
//   let result = [];

//   for (let i = 0; i < n; i++) {
//     let num = arr[i];
//     if (freqMap[num] === undefined) {
//       freqMap[num] = 1;
//     } else {
//       freqMap[num]++;
//     }
//   }

//   for (let num in freqMap) {
//     if (freqMap[num] > votes) {
//       result.push(Number(num));
//     }
//   }
//   return result;
// }
// console.log(findMajority([2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6])); // [ 5, 6 ]

// TC = O(n)
// SC = O(n)


// Using Boyer Moore

function majorityII(arr){
   let n = arr.length;
   let candidate1 = null, candidate2 = null;
   let count1 = 0, count2 = 0;

   for(let i=0;i<n;i++){
      if(arr[i] === candidate1){
        count1++;
      }else if(arr[i] === candidate2){
        count2++;
      }else if(count1 === 0){
        candidate1 = arr[i];
        count1 = 1;
      }else if(count2 === 0){
        candidate2 = arr[i];
        count2 = 1;
       }else{
        count1--;
        count2--;
       }
   }
   
   count1 = 0;
   count2 = 0;

   for(let num of arr){
    if(num === candidate1){
        count1++;
    }else if(num === candidate2){
        count2++;
    }
   }
    let result = [];
    if(count1 > n/3) result.push(candidate1);
    if(count2 > n/3) result.push(candidate2);

    return result;

}
console.log(majorityII([2,1,5,5,5,5,6,6,6,6,6])); // [5,6]

// TC = O(n)
// SC = O(1)


