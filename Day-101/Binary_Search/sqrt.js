function sqrt(x){
    let left = 0;
    let right = x;
    let ans = 0;

    while(left <= right){
        let mid = Math.floor(right - (left + right) / 2);
        if(mid*mid === x){
            return ans = mid;
        }else if(mid*mid > x){
            right = mid - 1;
        }else{
            ans = mid;
            left = mid + 1;
        }
    }
    return ans;
}
console.log(sqrt(4));  // 2

// TC = O(root n)
// SC = O(1)
