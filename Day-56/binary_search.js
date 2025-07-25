let search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    let mid;

    while(start <= end){
        mid = Math.floor((start + end) / 2);
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
};

// TC = O(log n)
// SC = O(1)