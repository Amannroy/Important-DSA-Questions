// Brute Force
function removeDuplicate(nums){
    let result = [];
    if(nums.length === 0){
        return 0;
    }
    for(let i=0;i<nums.length;i++){
    if(result[result.length-1] !== nums[i]){
        result.push(nums[i]);
    }
}
    return result.length;
}
console.log(removeDuplicate([1,1,2])); // 2

// TC = O(n)
// SC = O(n)

// Optimize
function removeDuplicateOptimize(nums){
    let unique = 1;

    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            nums[unique] = nums[i];
            unique++;
        }
    }
    return unique;
}
console.log(removeDuplicateOptimize([1,1,2])); // 2

// TC = O(n)
// SC = O(1)

