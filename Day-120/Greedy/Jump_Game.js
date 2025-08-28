let canJump = function(nums) {

    let maxIn = 0;
    for(let i=0;i<nums.length;i++){
         if(i > maxIn){
            return false;
         }

         maxIn = Math.max(maxIn, i+nums[i]);
    }
    return true;
};