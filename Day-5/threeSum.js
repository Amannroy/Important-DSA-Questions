// Brute Force: Using three loops-> TC = O(n^3)

// Using two pointers and set
function threeSum(nums){
    if(!nums || nums.length < 3){
        return [];
    }

    nums.sort((a,b) => a - b);
    let result = new Set();

    for(let i=0;i<nums.length-2;i++){
        let left = i+1;
        let right = nums.length-1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                result.add([nums[i], nums[left], nums[right]].toString());
                left++;
                right--;
            }else if(sum < 0){
                right--;
            }else{
                left++;
            }
        }
    }
    return Array.from(result).map(str => str.split(',').map(Number));
}
console.log(threeSum([-1,0,1,2,-1,-4])); // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

// TC = O(n^2)
// SC = O(n)