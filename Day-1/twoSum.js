 // 2 Approach-> One brute force using nested loops which will take O(n^2) time and second is using HashMap which will take O(n) time and space also O(n)

 // Brute force
//  function twoSum(nums, target){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
//     return [];
//  }
//  console.log(twoSum([3,4,5,6], 7)); // [0, 1]

 // TC = O(n^2)
 // SC = O(1)

 // Using HashMap
 function twoSum(nums, target){
    let map = new Map();

    for(let i=0;i<nums.length;i++){
        let compliment = target - nums[i];

        if(map.has(compliment)){
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
 }
 console.log(twoSum([3,4,5,6], 7)); // [0,1]
 
 // TC = O(n)
 // SC = O(1)
 