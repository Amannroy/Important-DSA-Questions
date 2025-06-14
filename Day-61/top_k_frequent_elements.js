let topKFrequent = function(nums, k) {
    let map = new Map();

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    let freqMap = Array.from(map.entries());

    freqMap.sort((a,b) => b[1] - a[1]);

    let result = [];

    for(let i=0;i<k;i++){
        result.push(freqMap[i][0]);
    }
    return result;
};

// TC = O(n logn)
// SC = O(n)