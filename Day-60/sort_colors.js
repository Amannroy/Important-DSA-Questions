var sortColors = function(nums) {
    if(nums.length <= 1){
        return;
    }

    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);

    sortColors(left);
    sortColors(right);

   let merged = merge(left, right);

   for(let i=0;i<nums.length;i++){
    nums[i] = merged[i];
   }
}

function merge(left, right){
    let result = [];
    let i=0,j=0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    while(i < left.length){
        result.push(left[i]);
        i++;
    }

    while(j < right.length){
        result.push(right[j]);
        j++;
    }
    return result;
};

// TC = O(nlogn)
// SC = O(n)