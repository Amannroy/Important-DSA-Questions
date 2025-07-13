let maxProfit = function(prices) {
   if(prices === null || prices.length <= 1){
    return 0;
   }

   let totalProfit = 0;
   for(let i=1;i<prices.length;i++){
    if(prices[i-1] < prices[i]){
        totalProfit += prices[i] - prices[i-1];
    }
   }
   return totalProfit;
};

// TC = O(n)
// SC = O(1)