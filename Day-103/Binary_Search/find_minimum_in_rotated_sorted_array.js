function findMinimum(nums){
    let left = 0;
    let right = nums.length-1;
    let ans = nums[0];

    while(left < right){
       let mid = Math.floor(left + (right - left) / 2);

       if(nums[mid] < nums[mid-1] && nums[mid] < nums[mid+1]){
         return nums[mid];
       }else if(nums[mid] >= nums[0]){
         left = mid + 1;
       }else{
         ans = nums[mid];
         right = mid - 1;
       }
    }
    return ans;
}
console.log(findMinimum([3,4,5,1,2]));
