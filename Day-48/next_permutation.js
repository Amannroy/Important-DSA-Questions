let nextPermutation = function(nums) {
   let n = nums.length;

   let i;
   for(i=n-2;i>=0;i--){
    if(nums[i] < nums[i+1]) break;
   }

   if(i >= 0){
    for(let j=n-1;j>=i;j--){
        if(nums[j] > nums[i]){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            break;
        }
    }
   }

   let left = i+1;
   let right = nums.length-1;

   while(left < right){
     let temp = nums[left];
     nums[left] = nums[right];
     nums[right] = temp;
     left++;
     right--;
   }
   return nums;
}
console.log(nextPermutation([1,2,3])); // [1,3,2]

// TC = O(n)
// SC = O(1)
