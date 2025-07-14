function singleNumber(nums){
   let map = new Map();
   for(let i=0;i<nums.length;i++){
     map.set(nums[i], (map.get(nums[i]) || 0) + 1);
   }
   for(let [key, value] of map){
       if(value === 1) return key;
   }
}
console.log(singleNumber([2,2,1])); //1

// TC = O(n)
// SC = O(n)

function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // Keep XOR-ing
  }
  return result;
}
