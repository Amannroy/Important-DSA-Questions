function rotateArray(nums,k){
    let n = nums.length;
    k = k % n;

    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);

    function reverse(numss, left, right){
        let i = left;
        let j = right;

        while(left < right){
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    return nums;
}

// TC = O(n)
// SC = O(1)