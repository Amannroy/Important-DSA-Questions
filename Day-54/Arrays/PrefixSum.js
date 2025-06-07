function prefixSum(arr){
   let prefix = [arr[0]];

   for(let i=1;i<arr.length;i++){
     prefix[i] = prefix[i-1] + arr[i];
   }
   return prefix;
}
console.log(prefixSum([2,4,6,8])); // [2,4,12,20]

// TC = O(n)
// SC = O(n)

