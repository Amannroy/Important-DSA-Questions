function generateSubsets(nums){
    let result = [];
    

    function backtrack(path, start){
        result.push([...path]);

        for(let i=start;i<nums.length;i++){
            path.push(nums[i]);

            backtrack(path, i+1);

            path.pop();
        }
       
    }
     backtrack([], 0);
     return result;
}
console.log(generateSubsets([1,2,3]));

// TC = O(n * 2^n)
//2^n → number of subsets

//n → time to copy each subset (on average) into the result array

// SC = O(n * 2^n)