function permutation(nums){
    nums.sort();
    let result = [];
    let used = new Array(nums.length).fill(false);

    function backtrack(path){
        // Base Case
        if(path.length === nums.length){
            result.push([...path]);
            return;
        }

        for(let i=0;i<nums.length;i++){
            // Skip used elements
            if(used[i]) continue;

            // Skip duplicates
            if(i > 0 && nums[i] === nums[i-1] && !used[i-1]) continue;

            // Choose
            used[i] = true;
            path.push(nums[i]);

            // Explore
            backtrack(path);

            // Undo
            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
}

// TC = O(n! * n)
// SC = O(n)