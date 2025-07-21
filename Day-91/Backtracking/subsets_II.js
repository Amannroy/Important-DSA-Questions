function subsetII(nums){
    let result = [];
    nums.sort((a,b) => a- b);

    function backtrack(start, path){
          result.push([...path]);

          for(let i=start;i<nums.length;i++){

            // Skip the duplicates
            if(i > start && nums[i] === nums[i-1]){
                continue;
            }

            path.push(nums[i]);
            backtrack(i+1, path);
            path.pop();
          }
    }
    backtrack(0, []);
    return result;
}
console.log(subsetII([1,2,2]));  // [ [], [ 1 ], [ 1, 2 ], [ 1, 2, 2 ], [ 2 ], [ 2, 2 ] ]

// TC= O(2^n * n)
// SC = O(2^n  * n)

