// Three Sum

function threeSum(nums){
    let result = new Set();
    nums.sort((a,b) => a - b);

    for(let i=0;i<nums.length;i++){
        let left = i + 1;
        let right = nums.length - 1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum === 0){
                result.add([nums[i], nums[left], nums[right]].toString());
                left++;
                right--;
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    return Array.from(result).map(str => str.split(',').map(Number)); // Converting back to number triplets
}
console.log(threeSum([-1,0,1,2,-1,-4]));

// TC = O(nlogn) + O(n^2) = O(n^2)

// SC = O(n^2)