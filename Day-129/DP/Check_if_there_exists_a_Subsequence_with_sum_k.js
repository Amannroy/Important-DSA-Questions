function isSubsequenceSumK(arr,k){
    let n = arr.length;

    let dp = Array.from({length: n}, () => Array(k+1).fill(undefined));

    function solve(i, target){
        if(target === 0) return true;
        if(i < 0) return false;

        // Check Memo Table
        if(dp[i][target] !== undefined) return dp[i][target];

        let pick = false;
        if(arr[i] <= target){
            pick = solve(i-1, target - arr[i]);
        }

        let notPick = solve(i-1, target);

        // Store result in dp
        dp[i][target] = pick || notPick;
        return dp[i][target];
    }
    return solve(n-1, k);
}
console.log(isSubsequenceSumK([1, 2, 3, 4], 6));  // true

// TC = O(n * k)
// SC = O(n * k)