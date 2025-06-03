function productArray(nums){
  let n = nums.length;

  let result = new Array(n).fill(1);

  for(let i=1;i<n;i++){
    result[i] = result[i-1] * nums[i-1];
  }
  
  let postfix = 1;
  for(let i=n-1;i>=0;i--){
    result[i] *= postfix;
    postfix *= nums[i];
  }
  return result;
}
console.log(productArray([1,2,3,4])); // [24,12,8,6]

// TC = O(n)
// SC = O(n)
