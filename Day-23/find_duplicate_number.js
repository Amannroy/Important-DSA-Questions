let findDuplicate = function(nums) {
    let seen = new Set();
    
    for(let num of nums){
        if(seen.has(num)){
            return num;
        }else{
            seen.add(num);
        }
    }
    return -1;
};