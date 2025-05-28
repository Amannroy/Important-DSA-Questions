function isHappy(n){
   let usedIntegers = new Set();

   while(true){
    let sum = 0;

     while(n !== 0){
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
     }

     if(sum === 1) return true;

     n = sum;
     
     if(usedIntegers.has(n)){
        return false;
     }
     usedIntegers.add(n);
   }
}
console.log(isHappy(19)); // true

// TC = O(log n)
// SC = O(1)
