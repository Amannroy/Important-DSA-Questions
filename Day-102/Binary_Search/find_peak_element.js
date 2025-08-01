function findPeak(nums){
   let left = 0;
   let right = nums.length-1;

   while(left < right){
       let mid = Math.floor(left + (right - left) / 2);

       if(nums[mid] > nums[mid+1]){
         // We are on the decreaing slope-> move left
         right = mid;
       }else{
        // We are on the increasing slope-> move right
        left = mid + 1;
       }
   }
    return left;
}
console.log(findPeak([1,2,3,1]));
