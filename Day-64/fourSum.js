let fourSum = function(nums, target) {
   nums.sort((a,b) => a - b);

   let result = new Set();

   for(let i=0;i<nums.length-3;i++){  // ensuures 4 elements available
     for(let j=i+1;j<nums.length-2;j++){ // ensures 3 elements available after j
        let left = j + 1;
        let right = nums.length-1;

        while(left < right){
            let sum = nums[i] + nums[j] + nums[left] + nums[right];

            if(sum === target){
                result.add([nums[i], nums[j], nums[left], nums[right]].toString());
                left++;
                right--;
            }else if(sum < target){
                left++;
            }else{
                right--;
            }
        }
     }
   }
   return Array.from(result).map(str => str.split(',').map(Number));
};

// TC = O(n^3)
// SC = O(k)