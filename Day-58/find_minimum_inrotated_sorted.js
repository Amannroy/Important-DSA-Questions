let findMin = function(nums) {
   let start = 0;
   let end = nums.length-1;
   let ans = nums[0];

   while(start <= end){
     let mid = Math.floor((start + end) / 2);
     if(nums[mid] < nums[mid-1] && nums[mid] < nums[mid+1]){
        return nums[mid];
     }
     else if(nums[mid] >= nums[0]){
        start = mid + 1;
     }else{
        ans = nums[mid];
        end = mid - 1;
     }
   }
   return ans;
};

// TC = O(n)
// SC = O(1)