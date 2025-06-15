// Brute Force
function longestConsecutive(nums){
    if(nums.length === 0) return 0;

    nums.sort((a,b) => a - b);
        
        let longest = 1;
        let current = 1;
        
        for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[i-1]) continue;

        if(nums[i] === nums[i-1] + 1){
           current++;
        }else{
            longest = Math.max(longest, current);
            current = 1;
        }
    }
    return Math.max(current, longest)
}
console.log(longestConsecutive([100,4,200,1,3,2]));


// TC = O(logn)
// SC = O(1)

// Optimize 
function longestConsecutiveOptimize(nums){
   let set = new Set(nums);
   
   if(nums.length === 0) return 0;
     
   
   let maxLength = 0;
   
   for(let num of set){

     if(!set.has(num - 1)){
       let currentNum = num;
       let currentStreak = 1;

       while(set.has(currentNum + 1)){
         currentNum++;
         currentStreak++;
       }
        maxLength = Math.max(maxLength, currentStreak);
     }
    }
     return maxLength;
     
}
console.log(longestConsecutiveOptimize([100,4,200,1,3,2])); // 4

// TC = O(n)
// SC = O(n)
