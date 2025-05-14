var nextPermutation = function(nums) {
    let n = nums.length;

    let i = n-2;
    while(i >= 0 && nums[i] >= nums[i+1]){
        i--;
    }

    if(i >= 0){
    let j = n-1;
    while(j >= 0 && nums[j] <= nums[i]){
        
        j--;
    }

    [nums[j], nums[i]] = [nums[i], nums[j]];
    }
    reverse(nums, i+1, n-1);

  
};

  function reverse(nums, start, end){
        while(start < end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // TC = O(n)
    // SC = O(1)