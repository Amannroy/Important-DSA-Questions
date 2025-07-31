function searchInRotatedSortedArray(nums, target){
     let left = 0;
     let right = nums.length-1;

     while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] >= nums[left]){
            if(nums[left] <= target && nums[mid] >= target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] <= target && nums[end] >= target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
     }
     return -1;
}
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2], 0)); // 4


// TC = O(log n)
// SC = O(1)
