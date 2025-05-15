 // Brute force

//  function maximumProfit(prices){
//     let maxProfit = 0;

//     for(let i=0;i<prices.length;i++){
//         for(let j=i+1;i<prices.length;j++){
//             let profit = prices[j] - prices[i];

//             if(profit > maxProfit){
//                 maxProfit = profit;
//             }
//         }
//     }
//     return maxProfit;
//  }
//  console.log(maximumProfit([7, 10, 1, 3, 6, 9, 2])); // 8

// TC = O(n^2)
// SC = O(1)



 // Optimized
 function maximumProfit(prices) {
        // your code here
        let minPrices = prices[0];
        let maxProfit = 0;
        
        for(let i=1;i<prices.length;i++){
            minPrices = Math.min(minPrices, prices[i]);
                
            maxProfit = Math.max(maxProfit, prices[i] - minPrices);
        }
        return maxProfit;
    }
    console.log(maximumProfit([7, 10, 1, 3, 6, 9, 2])); // 8

// TC = O(n)
// SC = O(1)
    