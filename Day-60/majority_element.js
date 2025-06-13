// Brute Force
let majorityElement = function(nums) {
    let n = nums.length;

    // Loop through each element
    for (let i = 0; i < n; i++) {
        let count = 0;

        // Count how many times nums[i] appears in the array
        for (let j = 0; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        // If the count is more than half the array length
        if (count > Math.floor(n / 2)) {
            return nums[i]; // This is the majority element
        }
    }

    return -1; // In case no majority element (but question says it's always present)
};

// TC = O(n^2)
// SC = O(1)

// Using Map
var majorityElementUsingMap = function(nums) {
    let map = new Map();
    let n = nums.length;

    for (let num of nums) {
        // If num is already in map, increment its count
        map.set(num, (map.get(num) || 0) + 1);

        // Check if this number is now majority
        if (map.get(num) > Math.floor(n / 2)) {
            return num;
        }
    }

    return -1; // In case no majority (though not needed as per problem statement)
};

// TC = O(n)
// SC = O(n)


// Using Boyer Moore
let majorityElementOptimize = function (nums) {
    let majority = nums[0];
    let votes = 1;

    for(let i=1;i<nums.length;i++){
        if(votes === 0){
            votes++;
            majority = nums[i];
        }else if(nums[i] === majority){
            votes++;
        }else{
            votes--;
        }
    }
    return majority;
};


// TC = O(n)
// SC = O(1)