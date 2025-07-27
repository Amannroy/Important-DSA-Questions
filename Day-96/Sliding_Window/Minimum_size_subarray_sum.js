let minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let left = 0;
    let currSum = 0;

    for(let right=0;right<nums.length;right++){
         currSum += nums[right];

         while(currSum >= target){
            minLength = Math.min(minLength, right-left+1);
            currSum -= nums[left];
            left++;
         }
    }
    return minLength === Infinity ? 0 : minLength;
};


// TC = O(n)
// SC = O(n)