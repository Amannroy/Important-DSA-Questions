function rotateArray(nums, k){
   let n = nums.length;
   k %= n;
   

   for(let i=0;i<k;i++){
      let last = nums[n-1];

      for(let j=n-1;j>=0;j--){
        nums[j] = nums[j-1];
      }
      nums[0] = last;
   }
   return nums;
}
console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]

// TC = O(n * k) -> Each rotation takes O(n), and we do it k times
// SC=  O(1)

// Optimize
function rotateArrayOptimize(nums, k){
   let n = nums.length;
   k %= n;

   reverseString(nums, 0, n-1);
   reverseString(nums, 0, k-1);
   reverseString(nums, k, n-1);


   function reverseString(nums, left, right){
    let i = left;
    let j = right;

    while(i < j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
   }
   return nums;
}
console.log(rotateArrayOptimize([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]

// TC = O(n)
// SC = O(1)



