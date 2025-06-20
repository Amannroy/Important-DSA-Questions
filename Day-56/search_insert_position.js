let searchInsert = function(nums, target) {
   let left = 0;
   let right = nums.length-1;
   let res = nums.length;

   while(left <= right){
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] === target){
        return mid;
    }else if(nums[mid] > target){
        res = mid;
        right = mid - 1;
    }else{
        left = mid + 1;
    }
   }
   return res;
};

// TC = O(logn)
// SC = O(1)