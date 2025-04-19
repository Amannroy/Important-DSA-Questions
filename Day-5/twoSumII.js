let twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        if(numbers[left] + numbers[right] === target){
            return [left+1, right+1];
        }else if(numbers[left] + numbers[right] < target){
            left++;
        }else{
            right--;
        }
    }
};
console.log(twoSum([2,3,4], 6)); // [1,3]

// TC = O(n)
// SC = O(1)
