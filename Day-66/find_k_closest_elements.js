function findClosestElements(arr, k, x){
   let left = 0;
   let right = arr.length-1;
   
   // Keep shrinking the window from the side that is farther from x until the window size becomes k
   while(right-left >= k){
       if(Math.abs(arr[left]-x) > Math.abs(arr[right] - x)){
        left++;
       }else{
        right--;
       }
   }
   return arr.slice(left, right+1);
}
console.log(findClosestElements([1,2,3,4,5], 4, 3)); // [1,2,3,4]


// TC = O(n)
// SC = O(1)