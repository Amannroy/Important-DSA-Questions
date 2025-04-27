// Brute Force-> O(n^2)
// function maxSlidingWindow(nums, k){
//     let ans = [];
//     let n = nums.length;
//     for(let i=0;i<=n-k;i++){
//         let total = 0;
//         for(let j=i;j<i+k;j++){
//             total = Math.max(total, nums[j]);
//         }
//         ans.push(total);
//     }
//     return ans;
// }
// console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));


// Sliding Window
let maxSlidingWindow = function(nums, k) {
    let deque = [];
    let ans = [];
    let n = nums.length;
 
    for(let i=0;i<k-1;i++){
     while(deque.length && nums[i] > nums[deque[deque.length - 1]]){
         deque.pop();
     }
     deque.push(i);
    }
 
    for(let i=k-1;i<=n-1;i++){
     while(deque.length && nums[i] > nums[deque[deque.length - 1]]){
         deque.pop();
     } 
     deque.push(i);
 
     if(deque[0] <= i - k){
         deque.shift();
     }
     ans.push(nums[deque[0]]);
    }
    return ans;
 };
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); //  [ 3, 3, 5, 5, 6, 7 ]

// TC = O(n)
// SC = O(k)