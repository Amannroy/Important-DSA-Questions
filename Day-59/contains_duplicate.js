let containsDuplicate = function(nums) {
    let set = new Set();

    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};

// TC = O(n)
// SC = O(n)