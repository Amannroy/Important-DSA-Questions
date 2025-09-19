let rob = function(nums) {
    let dp = new Array(nums.length).fill(-1);

    function solve(i){
        // Base Case
        if(i === -1) return 0;
        if(i === 0) return nums[0];

        if(dp[i] !== -1) return dp[i];

        let pick = nums[i] + solve(i-2);
        let noPick = solve(i-1);

        dp[i] = Math.max(pick, noPick);
        return dp[i];
    }
    return solve(nums.length-1);
};