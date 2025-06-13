let removeElement = function(nums, val) {
    let ans = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[ans] = nums[i];
            ans++;
        }
    }
    return ans;
    
};

// TC = O(n)
// SC = O(1)