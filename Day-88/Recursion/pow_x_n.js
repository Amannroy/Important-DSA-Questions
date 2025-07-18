function myPow(x,n){
    if(n < 0){
        return 1 / fastPow(x, -n);
    }

    function fastPow(base, pow){
        // Base Case
        if(pow === 0){
            return 1;
        }

        let half = fastPow(base, Math.floor(pow / 2));

        // Even pow
        if(pow % 2 === 0){
            return half * half;
        }else{
            // Odd Pow
            return half * half * base;
        }
    }
    return fastPow(x,n);
}
console.log(myPow(2.00000, 10)); // 1024

// TC = O(logn)
// SC = O(logn)
