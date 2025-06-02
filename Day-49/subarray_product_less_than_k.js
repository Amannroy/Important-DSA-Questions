function numSubarrayProductLessThanK(nums, k){

    if(k <= 1) return 0;

     let l=0;
     let prod = 1;
     let count=0;

     for(let r=0;r<nums.length;r++){
        prod *= nums[r];

        if(prod >= k){
            prod /= nums[l];
            l++;
        }
        count += r - l + 1;
     }
     return count;
}
console.log(numSubarrayProductLessThanK([10,5,2,6], 100));

// TC = O(n)
// SC = O(1)