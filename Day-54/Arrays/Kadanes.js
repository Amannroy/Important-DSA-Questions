function kadane(arr){
   let maxSum = arr[0];
   let currSum = arr[0];

   for(let i=1;i<arr.length;i++){
     
   if(currSum < 0){
     currSum = 0;
   }
   currSum += arr[i];
   if(currSum > maxSum){
    maxSum = currSum;
   }
}
   return maxSum;
}
console.log(kadane([-2,1,-3,4,-1,2,1,-5,4])); // 6

// TC = O(n)
// SC = O(1)
