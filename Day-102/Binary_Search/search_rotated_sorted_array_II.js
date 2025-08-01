function search_rotated_II(nums, target){
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        if(nums[mid] === target){
            return true;
        }else if(nusm[mid] === nums[left] && nums[mid] === nums[end]){
            start++;
            end--;
        }else if(nums[mid] >= nums[left]){
            if(nums[left] <= target && nums[mid] >= target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] <= target &&  nums[right] >= target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
     return false;
}
console.log(search_rotated_II([2,5,6,0,0,1,2], 0)); // true
