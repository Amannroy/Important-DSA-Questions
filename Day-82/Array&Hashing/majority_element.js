let majorityElement = function (nums) {
    let majority = nums[0];
    let votes = 1;

    for(let i=1;i<nums.length;i++){
        if(votes === 0){
            votes = 1;
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