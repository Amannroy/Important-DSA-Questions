function fourSum(nums, target){
    nums.sort((a,b) => a - b);

    let result = new Set();

    for(let i=0;i<nums.length-3;i++){
        for(let j=i+1;j<nums.length-2;j++){
            let left = j+1;
            let right = nums.length-1;

            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if(sum === target){
                    result.add([nums[i], nums[j], nums[left], nums[right]].toString());
                    left++;
                    right--;
                }else if(sum < target){
                    left++;
                }else{
                    right--;
                }
            }
        }
    }
    return Array.from(result).map(str => str.split(',').map(Number));
}
console.log(fourSum([1,0,-1,0,-2,2], 0)); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]

// TC = O(n^2) * O(n) = O(n^3)
// SC = O(1)
