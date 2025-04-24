// Sliding Window(Variable size window)
let longestSubarray = function(nums) {
    let left = 0;
    let maxLen = 0;
    let zeroCount = 0;

    for(let right=0;right<nums.length;right++){
        if(nums[right] === 0){
           zeroCount++;
        }
        
        while(zeroCount > 1){
            if(nums[left] === 0){
                zeroCount--;
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left);
    }
    return maxLen;

};
console.log(longestSubarray([1,1,0,1])); // 3

// TC = O(n)
// SC = O(1)
