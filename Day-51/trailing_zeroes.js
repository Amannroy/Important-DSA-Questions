function countTrailingZeroes(num){
    if(num < 0){
        return -1;
    }
    let count = 0;
    for(let i=5;Math.floor(num / i) >= 1;i *= 5){
        count += Math.floor(num / i);
    }
    return count;
}
console.log(countTrailingZeroes(25)); // 6



