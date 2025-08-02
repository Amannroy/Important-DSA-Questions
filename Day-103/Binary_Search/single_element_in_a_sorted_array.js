/*
🧠 INTUITION:
--------------------------------------
In a sorted array, all elements appear in pairs except one single element.

Example: [1,1,2,3,3,4,4,8,8]
Here, the single element is 2.

Pairs always start at even index (0, 2, 4, ...).
If the array was perfect, pairs would be:
[1,1], [3,3], [4,4], [8,8]

But as soon as the single element appears,
this pattern breaks.

So:
- If the left side (before mid) has even number of elements,
  then the single element is on the right.
- If the left side has odd number of elements,
  then the single element is on the left.

To simplify this:
- We always make mid even (mid = mid - 1 if it's odd)
- Then we check: nums[mid] === nums[mid + 1]
  → If yes, single is on the right side.
  → If no, single is on the left side or at mid.

We keep shrinking the search space until left == right.
At that point, left points to the single element.
*/

function singleNonDuplicate(nums){
    let start = 0;
    let end = nums.length-1;

    while(start < end){
        let mid = Math.floor(start + (end - start) / 2);

        // Ensure mid is even so it always points to the elemnt of the pair
        if(mid % 2 === 1){
            mid--;
        }

        if(nums[mid] === nums[mid+1]){
            // Pair is valid, move to the right side
             start = mid + 2;
        }else{
             // Pair is broken, move to the left side (including mid)
            end = mid;
        }
    }
     // When loop ends, start == end, and that's the single element
    return nums[start];
}
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); // 2

