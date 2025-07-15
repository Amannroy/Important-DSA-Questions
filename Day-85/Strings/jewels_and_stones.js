let numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i=0;i<stones.length;i++){
        if(jewels.includes(stones[i])){
            count++;
        }
    }
    return count;
};

// TC = O(n)
// SC = O(1)