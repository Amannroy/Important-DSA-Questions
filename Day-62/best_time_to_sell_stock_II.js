function maxProfit(nums) {
  if (nums === null || nums.length <= 1) {
    return 0;
  }

  let totalProfit = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      totalProfit += nums[i] - nums[i - 1];
    }
  }
  return totalProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7

// TC = O(n)
// SC = O(1)
