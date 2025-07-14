function missingNumber(nums){
    let n = nums.length;
    let  sumOfNat = n * (n+1) / 2;
    let sumOfNums = 0;
    for(let i=0;i<n;i++){
        
         sumOfNums += nums[i];
    }
    return sumOfNat - sumOfNums;
}
console.log(missingNumber([3,0,1]));

// TC = O(n)
// SC = O(1)