function subarraySumEqualsK(nums, k){
    let n = nums.length;

    let count = 0;
    for(let i=0;i<n;i++){
       let sum = 0;
       for(let j=i;j<n;j++){
        sum += nums[j];

        if(sum === k){
            count++;
        }
       }
    }
    return count;
}
console.log(subarraySumEqualsK([1,1,1], 2)); // 2

// TC = O(n^2)
// SC = O(1)

// Optimize
function subarraySumEqualsKOptimize(nums, k){
    let count = 0;
    let sum = 0;

    let map = new Map();
    map.set(0, 1);

    for(let i=0;i<nums.length;i++){
        sum += nums[i];

        if(map.has(sum - k)){
            count += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
console.log(subarraySumEqualsKOptimize([1,1,1], 2)); // 2

// TC = O(n)
// SC = O(n)

