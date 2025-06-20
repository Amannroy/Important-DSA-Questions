let search = function (nums, target) {
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] >= nums[start]){
            if(nums[start] <= target && nums[mid] >= target){
                end = mid-1;
            }else{
                start = mid+1;
            }
        }else{
            if(nums[mid] <= target && nums[end] >= target){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1;
};

// TC = O(logn)
// SC = O(1)