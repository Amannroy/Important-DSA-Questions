// brute force(Using sorting)
function duplicate(nums){
    nums.sort((a,b) => a - b);

    for(let i=0;i<nums.length-1;i++){
         if(nums[i] === nums[i+1]){
            return nums[i];
         }
    }
    return -1;
}
console.log(duplicate([1,2,3,2,2])); // 2
// TC = O(n log n)
// SC = O(1)

// Using set
function duplicateUsingSet(nums){
    let seen = new Set();

    for(let num of nums){
        if(seen.has(num)){
            return num;
        }else{
            seen.add(num);
        }
    }
    return -1;
}
console.log(duplicateUsingSet([1,3,4,2,2])); // 2

// TC = O(n)
// SC = O(n)


// using fast and slow(Linked List)

let findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;

    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];

        if(slow === fast){
            break;
        }
    }
    let slow2 = 0;
    while(true){
        slow = nums[slow];
        slow2 = nums[slow2];
        if(slow ===slow2){
            return slow2;
        }
    }
};
console.log(findDuplicate([1,3,4,2,2])); // 2

// TC = O(n)
// SC = O(1)
