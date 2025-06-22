// Using Greedy 
function bestTimeToSell(prices){
       let minPrice = prices[0];
       let maxProfit = 0;
      
       for(let i=1;i<prices.length;i++){
           minPrice = Math.min(minPrice, prices[i]);
           maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      }
      return maxProfit;
}
console.log(bestTimeToSell([7,1,5,3,6,4])); // 5

// TC = O(n)
// SC = O(1)


// Using sliding window
function bestTimeToBuyStock(prices){
    let left = 0; // buy;
    let right = 1; // sell
    let maxProfit = 0;

    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        }else{ 
            left = right; // lower price found better to buy here
        }
        right++;
    }
    return maxProfit;
}
console.log(bestTimeToBuyStock([7,1,5,3,6,4])); // 5

// TC = O(n)
// SC = O(1)

