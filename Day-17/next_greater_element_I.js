let nextGreaterElement = function(nums1, nums2) {
    let stack = [];

let nextGreater = {};

for(let num of nums2){
    while(stack.length > 0 && stack[stack.length - 1] < num){
        let smallerNum = stack.pop();
        nextGreater[smallerNum] = num;
    }
    stack.push(num);
}
return nums1.map(num => nextGreater[num] ?? -1);
};
console.log(nextGreaterElement([4,1,2],[1,3,4,2])); // [-1,3,-1]

// TC = O(n)
// SC = O(n)
