let minEatingSpeed = function (piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let n = piles.length;
    let ans = end;

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        
        let total_time = 0;
        for(let i=0;i<n;i++){
            total_time += Math.ceil(piles[i] / mid);
        }
            if(total_time > h){
                start = mid+1;
            }else{
                ans = mid;
                end = mid - 1;
            }
    }
     return ans;
};

// TC = O(nlogn)
// SC = O(1)