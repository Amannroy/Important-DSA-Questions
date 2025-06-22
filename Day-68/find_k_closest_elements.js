function findKClosest(arr, k, x){
  let left = 0;
  let right = arr.length - 1;

  while(right - left >= k){
    if(arr[left - x] > arr[right - x]){
        left++;
    }else{
        right--;
    }
  }
  return arr.slice(left, right+1);
}

console.log(findKClosest([1,2,3,4,5], 4, 3)); // [1,2,3,4]

// TC = O(n)
// SC = O(1)
