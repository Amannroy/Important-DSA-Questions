let shipWithinDays = function(weights, days) {
    let start = Math.max(...weights);
    let end = weights.reduce((a,b) => a+b, 0);
    let ans = end;

    while(start <= end){
        let mid = Math.floor(start + (end - start) / 2);

        let currentWeight = 0;
        let requiredDays = 1;
        let n = weights.length;

        for(let i=0;i<n;i++){
            if(currentWeight + weights[i] > mid){
                requiredDays++;
                currentWeight = 0;
            }
            currentWeight += weights[i];
        }
        
        if(requiredDays > days){
            start = mid + 1;
        }else{
            ans = mid;
            end = mid - 1;
        }
        
    }
    return ans;
};