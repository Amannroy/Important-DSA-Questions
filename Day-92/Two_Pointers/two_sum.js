let twoSum = function(nums, target) {
    let map = new Map;
    let ans = [-1,-1];

    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];

        if(!map.has(complement)){
            map.set(nums[i], i);
        }else{
            ans[0] = map.get(complement);
            ans[1] = i;
        }
    }
    return ans;
};

// TC = O(n)
// SC = O(n)
