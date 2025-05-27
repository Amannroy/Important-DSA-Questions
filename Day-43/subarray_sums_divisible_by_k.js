// function subarraysDivByK(nums, k){
//     let count = 0;
//     for(let i=0;i<nums.length;i++){
//         let sum = 0;
//         for(let j=i;j<nums.length;j++){
//             sum += nums[j];

//             if(sum % k === 0){
//                count++;
//             }
//         }
        
//     }
//     return count;
// }
// console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)); // 7

// TC = O(n^2)
// SC = O(1)



// Optimize

function subarraysDivByK(nums, k){
    let count = 0;
    let sum = 0;
    let remainderCount = new Map();
    remainderCount.set(0,1);

    for(let num of nums){
        sum += num;

        let remainder = sum % k;

        if(remainder < 0) remainder += k;

        if(remainderCount.has(remainder)){
            count += remainderCount.get(remainder);
        }
        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }
    return count;
}
console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)); // 7

// TC = O(n)
// SC = O(k)
