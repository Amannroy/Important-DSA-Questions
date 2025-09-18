let minCostClimbingStairs = function(cost) {
    let n = cost.length;

    let dp = new Array(n+1).fill(0);

    // Base Case: cost to stand at step 0 or step 1 is 0
    dp[0] = 0;
    dp[1] = 0;

    for(let i=2;i<=n;i++){
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
    }
     return dp[n];
};