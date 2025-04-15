//Approach 1
// function duplicate(nums){
//     for(let i=1;i<nums.length;i++){
//      if(nums[i] === nums[i-1]){
//          return true;
//      }
//     }
//     return false;
//  }
//  console.log(duplicate([1,2,3,3])); //true

 // TC = O(n)
 // SC = O(1)

 //But it will work only for sorted array. It will not work for unsorted array 

//  Another approach to be sort it then put the same coe-> TC = O(nlogn)

// Better is using set -> TC = O(n), SC = O(1)

// Approach 2
function duplicate(nums){
    let set = new Set();

    for(let num of nums){
        if(set.has(num)) return true;
        set.add(num);
    }
    return false;
}
console.log(duplicate([1,2,3,3])); // true

// TC = O(n)
// SC = O(1)
