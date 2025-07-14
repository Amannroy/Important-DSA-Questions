function moveZeroes(nums){
    
        let nonZero = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i] !== 0){
                let temp = nums[i];
                nums[i] = nums[nonZero];
                nums[nonZero] = temp;

                nonZero++;
            }
            
    }
    return nums;
}
console.log(moveZeroes([0,1,0,3,12]));

// TC = O(n)
// SC = O(1)