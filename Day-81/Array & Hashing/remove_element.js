let removeElement = function(nums, val) {
    let n = nums.length;
    let count = 0;
    for(let i=0;i<n;i++){
        if(nums[i] !== val){
           nums[count] = nums[i];
           count++;
        }
    }
    return count;
};

// TC = O(n)
// SC = O(1)