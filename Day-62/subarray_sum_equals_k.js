function subarraySumEqualsK(nums, k){
    let n = nums.length;

    let count = 0;
    for(let i=0;i<n;i++){
       let sum = 0;
       for(let j=i;j<n;j++){
        sum += nums[j];

        if(sum === k){
            count++;
        }
       }
    }
    return count;
}
console.log(subarraySumEqualsK([1,1,1], 2)); // 2

// TC = O(n^2)
// SC = O(1)

// Optimize

