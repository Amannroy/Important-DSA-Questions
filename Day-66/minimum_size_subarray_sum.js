function minSubArrayLen (target, nums) {
    let left = 0;
    let currSum = 0;
    let minLength = Infinity;

    for(right=0;right<nums.length;right++){
        currSum += nums[right];

        while(currSum >= target){
            minLength = Math.min(minLength, right - left + 1);

            currSum -= nums[left];
            left++;
        }
        
    }
    return minLength === Infinity ? 0 : minLength;
}
console.log(minSubArrayLen(7, [2,3,1,2,4,3])); // 2


// Tc = O(n)
// SC = O(1)