let combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(start, path, sum){
        // Base Case
        if(sum === target){
            result.push([...path]);
            return;
        }

       if(sum > target) return;  // Exceeded, prune

        for(let i=start;i<candidates.length;i++){
              path.push(candidates[i]);// choose
              backtrack(i, path, sum + candidates[i]); // Not i+1, because we can reuse
              path.pop(); // Backtrack
        }
    }
    backtrack(0, [], 0);
    return result;
};

// TC = O(2^t)->Exponential — in worst case, try all combinations
// SC=  O(t)