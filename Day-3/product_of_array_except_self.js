// Brute Force
// let productExceptSelf = function(nums) {
//     let result = [];

//     for(let i=0;i<nums.length;i++){
//         let prod = 1;
//         for(let j=0;j<nums.length;j++){
//             if(i !== j){
//                 prod *= nums[j];
//             }
//         }
//         result.push(prod);
//     }
//     return result;
// };
// console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]


// TC = O(n^2)
// SC = O(n)

// 2nd Approach -> Using Prefix and Postfix

let productExceptSelf = function(nums) {
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
};
console.log(productExceptSelf([1,2,3,4])); //[ 24, 12, 8, 6 ]

// TC = O(n)
// SC = O(n)