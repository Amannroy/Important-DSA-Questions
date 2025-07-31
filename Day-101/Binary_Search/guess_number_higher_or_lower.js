function guessNumber(n, pick){
     let left = 1;
     let right = n;

     while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        let res = guess(mid);

        if(res > 0){
            left = mid + 1;
        }else if(res < 0){
            right = mid - 1;
        }else{
            return mid;
        }
     }
     return res;
}
console.log((guessNumber(10, 6)));

// TC = O(log n)
// SC = O(1)