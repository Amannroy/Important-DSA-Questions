let rob = function(nums) {
    let n = nums.length;

    if(n === 1) return nums[0];

    function robLinear(arr){
        let prev2 = 0;
        let prev1 = 0;

        for(let num of arr){
            let curr = Math.max(num + prev2, prev1);

            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }

    let case1 = robLinear(nums.slice(1));
    let case2 = robLinear(nums.slice(0, n-1));

    return Math.max(case1, case2);
}