function maximumProfit(prices) {
  // code here
  if (prices === null || prices.length <= 1) {
    return 0;
  }

  let totalProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
  }
  return totalProfit;
}
console.log(maximumProfit([100, 180, 260, 310, 40, 535, 695])); // 865

// TC = O(n)
// SC = O(1)
