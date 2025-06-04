// prime No->Number which is only divisible by 1 or the number itself

// 1st Approach
function isPrime(n){
   if(n === 0 || n === 1){
    return false;
   }
   if(n === 2){
    return true;
   }

   for(let i=2;i<n;i++){
    if(n % i === 0){
        return false;
    }
   }
   return true;
}
console.log(isPrime(7)); // true

// Approach 2
function isPrime2(n){
   if(n === 0 || n === 1){
    return false;
   }
   if(n === 2){
    return true;
   }

   for(let i=2;i*i<=n;i++){
     if(n % i === 0){
        return false;
     }
   }
   return true;
}
console.log(isPrime2(11)); // true


// Print all the prime numbers smaller than n
function primeSmallerThanN(n){
   for(let i=2;i<n;i++){
    if(isPrime2(i)){
        console.log(i);
    }
   }
}
console.log(primeSmallerThanN(10));

