function containsNearbyDuplicate(nums, k){
    let map = new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            let prevIndex = map.get(nums[i]);

            if(i - prevIndex <= k){
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
}
console.log(containsNearbyDuplicate([1,2,3,1], 3)); // true

// TC = O(n)
// SC = O(n)
