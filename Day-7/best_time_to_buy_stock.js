// Brute Force
// function maxProfit(prices){
//     let maxProfit = 0;

//     for(let i=0;i<prices.length;i++){
//         for(let j=i+1;j<prices.length;j++){
//             let profit = prices[j] - prices[i]; // Buy at i, sell at j
//             if(profit > maxProfit){
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
// }

// TC = O(n^2)
// SC = O(1)

// Optimize -> Two Pointers
function maxProfit(prices){
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let i=1;i<prices.length;i++){
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }

    return maxProfit;
}
console.log(maxProfit([7,1,5,3,6,4])); // 5

// TC = O(n)
// SC = O(1)
