function twoSumII(numbers, target){
    let left = 0;
    let right = numbers.length-1;

    while(left < right){
        let sum = numbers[left] + numbers[right];

        if(sum === target){
            return [left + 1, right + 1];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [-1,-1];
}
console.log(twoSumII([2,7,11,15], 9)); // [1,,2]

// TC = O(n)
// SC = O(1)
