let guessNumber = function(n) {
    let left = 1;
    let right = n;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let res = guess(mid);

        if(res > 0){
            left = mid + 1;
        }else if(res < 0){
            right = mid - 1;
        }else{
            return mid;
        }

    }
};

//TC = O(logn)
//SC = O(1)