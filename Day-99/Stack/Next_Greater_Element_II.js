function nextGreaterElement(nums){
    let stack = [];
    let n = nums.length;
    let result = new Array(n).fill(-1);

    for(let i=0;i<2*n;i++){
        let index = i % n;
        while(stack.length > 0 && nums[i] > stack[stack.length-1]){
            let top = stack.pop();
            result[top] = nums[index];
        }
        stack.push(index);
    }
    return result;
}
console.log(nextGreaterElement([1,2,1])); [ 2, -1, -1 ]

// TC = O(n)
// SC = O(n)
