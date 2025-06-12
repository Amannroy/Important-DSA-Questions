let shipWithinDays = function(weights, days) {
  let start = Math.max(...weights);
  let end = weights.reduce((a,b) => a + b, 0);
  let ans = end;

  while(start <= end){
    let mid = Math.floor((start + end) / 2);

    let requiredDays  = 1;
    let currWeight = 0;

    for(let i=0;i<weights.length;i++){
        if(currWeight + weights[i] > mid){
            requiredDays ++;
            currWeight = 0;
        }
        currWeight += weights[i];
    }

    if(requiredDays > days){
        start = mid + 1;
    }
    else{
        ans = mid;
        end = mid - 1;
    }
  }
  return ans;
};

// TC = O(nlogn)
// SC = O(1)