// 1st Approach-> Using HashMap and Sorting
// function topKFrequent(nums, k){
//      let map = new Map();

//      for(let num of nums){
//         // just in one line
//         //map.set(num, (map.get(num) || 0) + 1);
//         if(!map.has(num)){
//             map.set(num, 1);
//         }else{
//             map.set(num, map.get(num) + 1);
//         }
//      }
//      let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);

//     return sorted.slice(0,k).map(pair => pair[0]);
// }
// console.log(topKFrequent([1,1,1,2,2,3], 2));

// TC = O(n log n)
// SC = O(m)

// 2nd Approach -> Using Heap and hashmap
function topKFrequent(nums,k){
   let map = new Map();
    
   for(let num of nums){
     map.set(num, (map.get(num) || 0) + 1);
   }

   let minHeap = [];

   for(let [num, freq] of map.entries()){
       minHeap.push([num, freq]);

       if(minHeap.length > k){
          minHeap.sort((a,b) => a[1] - b[1]);

          minHeap.shift();
       }
   }
   return minHeap.map(pair => pair[0]);
}
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [2,1]

// TC = O(nlogk)
// TC = O(n)


