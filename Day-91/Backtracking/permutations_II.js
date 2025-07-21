let permuteUnique = function(nums) {
    let result = [];
    nums.sort((a,b) => a - b);

    function backtrack(start){
        if(start === nums.length){
            result.push([...nums]);
            return;
        }

        let swapped = new Set();

        for(let i=start;i<nums.length;i++){
            // Skip the duplicate
            if(swapped.has(nums[i])){
                continue;
            }

            swapped.add(nums[i]);

            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start+1);

            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    backtrack(0);
    return result;
};

// TC = O(n! * n)
// SC = O(n! * n)
