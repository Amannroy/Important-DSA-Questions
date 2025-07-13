let longestConsecutive = function(nums) {
    let set = new Set(nums);
    let result = 0;

    for(let num of set){
        if(!set.has(num-1)){
            let currentNum = num;
            let currentStreak = 1;

            while(set.has(currentNum + 1)){
                currentStreak++;
                currentNum++;
               
            }
            result = Math.max(result, currentStreak);
        }
    }
    return result;
};

// TC = O(n)
// SC = O(n)