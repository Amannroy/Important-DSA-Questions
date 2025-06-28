let nextGreaterElements = function(nums) {
   let stack = [];
    let n = nums.length;
    let result = new Array(n).fill(-1);
    
    for(let i=0;i<2*n;i++){
        let index = i % n;
        while(stack.length > 0 && nums[stack[stack.length - 1]] < nums[index]){
            let nextSmaller = stack.pop();
            
            result[nextSmaller] = nums[index];
        }
        stack.push(index);
    }
    return result;
}

// TC = O(n)
// SC = O(n)