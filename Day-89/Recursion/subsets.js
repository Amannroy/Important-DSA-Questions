let subsets = function(nums) {
  let result = [];

  function backtrack(start, path){
     result.push([...path]);

     for(let i=start;i<nums.length;i++){
        path.push(nums[i]); // Include nums[i]
        backtrack(i+1, path); // Recurse with next index
        path.pop(); // Backtrack(remove nums[i])
     }
  }
  backtrack(0, []);
  return result;

};

// = Number of subsets × time to copy each subset
// = 2^n × n

// TC = O(2^n * n)
// SC=  O(n)