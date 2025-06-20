// Brute Force
function maxProfit(prices){
    let maxProfit = 0;
    for(let i=0;i<prices.length;i++){
        let buy = prices[i];
        for(let j=i+1;j<prices.length;j++){
            let sell = prices[j];
            maxProfit = Math.max(maxProfit, sell - buy);
        }
    }
    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4])); //5

// TC = O(n^2)
// SC = O(1)


// Optimize
function maxProfitOptimize(prices){
    let maxProfit = 0;
    let minPrice = prices[0];

    for(let i=1;i<prices.length;i++){
        minPrice = Math.min(prices[i], minPrice);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}
console.log(maxProfitOptimize([7,1,5,3,6,4])); // 5

// TC = O(n)
// SC = O(1)
