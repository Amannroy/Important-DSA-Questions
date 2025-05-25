// Two SumII
// numbers = [2,7,11,15], target = 9
// Output = [1,2]

function twoSumII(nums, target){
   let left = 0;
   let right = nums.length-1;

   while(left < right){
    let sum = nums[left] + nums[right];

    if(sum === target){
        return [left+1, right+1];
    }else if(sum < target){
        left++;
    }else{
        right--;
    }
   }
}
console.log(twoSumII([2,7,11,15], 9)); // [1,2]

// TC = O(n)
// SC = O(1)






 