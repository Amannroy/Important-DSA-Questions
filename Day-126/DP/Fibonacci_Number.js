let fib = function(n) {
    let memo = {};

    // Helper function with recursion + memoization
    function dp(num) {
        // Base cases
        if (num === 0) return 0;
        if (num === 1) return 1;

        // If we already calculated fib(num), return it from memo
        if (memo[num] !== undefined) {
            return memo[num];
        }

        // Otherwise, calculate and store in memo
        memo[num] = dp(num - 1) + dp(num - 2);

        return memo[num];
    }

    return dp(n);
};