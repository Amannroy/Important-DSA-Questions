let removeDuplicates = function(nums) {
     let unique = 1;
     for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            nums[unique] = nums[i];
            unique++;
        }
     }
     return unique;
};

// TC = O(n)
// SC = O(1)