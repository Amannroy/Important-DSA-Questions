let climbStairs = function(n) {
    let memo = {};

    function dp(num){
        // Base Case
        if(num === 1) return 1;
        if(num === 2) return 2;

        if(memo[num] !== undefined){
            return memo[num];
        }

        memo[num] = dp(num - 1) + dp(num - 2);
        return memo[num];
    }
    return dp(n);
};