let majorityElement = function(nums) {
    let map = new Map();
    let n = nums.length;

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    let result = [];
    for(let [key, value] of map.entries()){
        if(value > Math.floor(n / 3)){
            result.push(key);
        }
    }
    return result;
};

// TC = O(n)
// SC = O(n)