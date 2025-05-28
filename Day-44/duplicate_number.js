function duplicateNumber(nums){
    let set = new Set();

    for(let num of nums){
        if(set.has(num)){
            return num;
        }else{
            set.add(num);
        }
    }
    return -1;
}
console.log(duplicateNumber([1,3,4,2,2])); // 2

// TC = O(n)
// SC = O(n)
