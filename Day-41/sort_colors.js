// Brute Force
// function sortColors(nums){
//     let n = nums.length;
//     for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             if(nums[i] > nums[j]){
//                 [nums[i], nums[j]] = [nums[j], nums[i]];
//             }
//         }
//     }
//     return nums;
// }
// console.log(sortColors([2,0,2,1,1,0])); // [ 0, 0, 1, 1, 2, 2 ]

// TC = O(n^2)
// SC = O(1)


// Optimize
function sortColors(nums){
    let left = 0;
    let right = nums.length - 1;

    let i = 0;

    while(i <= right){
        if(nums[i] === 0){
            [nums[left], nums[i]] = [nums[i], nums[left]];
            i++;
            left++;
        }
        else if(nums[i] === 2){
            [nums[right], nums[i]] = [nums[i], nums[right]];
            right--;
        }else{
            i++;
        }
    }
    return nums;
}
console.log(sortColors([2,0,2,1,1,0]));  // [0,0,1,1,2,2]

// TC = O(n)
// SC = O(1)

