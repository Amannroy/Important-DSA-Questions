let search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target){
            return true;
        }
        else if(nums[mid] === nums[start] && nums[mid] === nums[end]){
            start++;
            end--;
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
    return false;
};

// TC = O(logn) in average case and O(n) in worst case
// SC = O(1)