function combinations(nums, k){
    let result = [];

    function backtrack(start, path){
        if(path.length === k){
            result.push([...path]);
            return;
        }
         
        for(let i=start;i<nums.length;i++){
        path.push(nums[i]);  // Choose
        backtrack(i+1, path); // Explore
        path.pop(); //backtrack
        }
    }
    backtrack(0, []);
    return result;
}
console.log(combinations([1,2,3], 2)); //[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]

// TC = O(2^n * k) 
// SC = O(n * k)
