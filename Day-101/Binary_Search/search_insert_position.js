function searchInsertPosition(nums, target){
    let left = 0;
    let right = nums.length-1;
    let ans = nums.length;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] > target){
            ans = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return ans;
}
console.log(searchInsertPosition([1,3,5,6], 7));

// TC = O(log n)
// SC = O(1)
