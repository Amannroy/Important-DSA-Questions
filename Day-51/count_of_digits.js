// Iterative approach

function countDigits(num){
   if(num === 0){
    return 1;
   }
   let count = 0;
   while(num !== 0){
    num = Math.floor(num / 10);
    count++;
   }
   return count;
}
console.log(countDigits("546")); // 3


// Recursive
function countOfDigits(num){
   // Base Case
   if(parseInt(num/10) === 0){
    return 1;
   }
   return 1 + countOfDigits(parseInt(num / 10));
}
console.log(countOfDigits("4567")); // 4

