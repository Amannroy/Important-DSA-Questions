function majorityElementII(nums){
    let map = new Map();

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
    }

    let result = [];
    for(let [key, value] of map.entries()){
        if(value > Math.floor(nums.length / 3)){
        result.push(key);
        }
    }
    return result;
}
console.log(majorityElementII([3,2,3])); // [3]

// TC = O(n)
// SC = O(n)


