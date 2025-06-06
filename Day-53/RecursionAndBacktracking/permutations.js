function permutation(nums){
   let result = [];

   function backtrack(start){
    if(start === nums.length){
        result.push([...nums]);
    }

        for(let i=start;i<nums.length;i++){
            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start + 1);

            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    backtrack(0);
    return result;

}
console.log(permutation([1,2,3]));

// TC = O(n * n!)
// SC = O(n * n!)
