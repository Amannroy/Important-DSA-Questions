function removeDuplicate(nums){
    let unique = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]){
            nums[unique] = nums[i];
            unique++;
        }
    }
    return unique;
}
console.log(removeDuplicate([1,1,2])); // 2

// TC = O(n)
// SC = O(1)
