var twoSum = function(nums, target) {
    let map = new Map();
    let ans = [-1,-1];
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        if(!map.has(complement)){
            map.set(nums[i], i);
        }else{
            ans[0] =  map.get(complement);
            ans[1] = i;
        }
    } 
    return ans;
};

// complement = 9-2 = 7
// find complement 7 in the map
// 7 not in map so put 2 in the map with index
// 2 in the map-> [2,0]
// Net element 7
// find complement = 9-7 = 2
// 2 is in the map
// so find the complement and i -> 0, 1 return it 



// TC = O(n)
// SC = O(n)