let containsDuplicate = function(nums) {
   let set = new Set();
   for(let i=0;i<nums.length;i++){
      if(!set.has(nums[i])){
        set.add(nums[i]);
      }else{
        return true;
      }
   }
   return false;
};

// TC = O(n)
// SC = O(n)