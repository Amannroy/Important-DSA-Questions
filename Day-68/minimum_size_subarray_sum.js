function minimumSize(target, nums) {
   let left = 0;
   let currSum = 0;
   let minLength = Infinity;

   for(let right=0;right<nums.length;right++){
     currSum += nums[right];

     while(currSum >= target){
        minLength = Math.min(minLength, right - left + 1);

        currSum -= nums[left];
        left++;
     }
   }
   return minLength === Infinity ? 0 : minLength;
}
console.log(minimumSize(7, [2, 3, 1, 2, 4, 3])); //2

// TC = O(n)
// SC = O(1)
