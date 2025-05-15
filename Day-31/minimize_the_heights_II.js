function getMinDiff(arr, k){
   let n = arr.length;
   
   arr.sort((a,b) => a- b);
   let diff = arr[n-1] - arr[0];

   for(let i=0;i<n-1;i++){
     let low = Math.min(arr[0]+k, arr[i+1]-k);
     let high = Math.max(arr[i]+k, arr[n-1]-k);

     if(low < 0) continue;

     diff = Math.min(diff, high - low);
   }
   return diff;
}
console.log(getMinDiff([1, 5, 8, 10], 2));


// TC = O(n log n) + O(n)
// SC = O(n)