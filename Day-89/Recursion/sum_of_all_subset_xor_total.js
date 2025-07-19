let subsetXORSum = function(nums) {
    let total = 0;

    function backtrack(start, subset){
         let xor = 0;
         for(let num of subset){
            xor ^= num;
         }
         total += xor;

         for(let i=start;i<nums.length;i++){
            subset.push(nums[i]);
            backtrack(i+1, subset);
            subset.pop();
         }
    }
    backtrack(0, []);
    return total;
};

// There are 2^n subsets.
// Each subset may take up to O(n) to XOR.
// TC = O(n * 2^n)
// SC = O(n)