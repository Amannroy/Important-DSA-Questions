function mergeSort(arr){
    // Base Case
    if(arr.length <= 1){
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left,right);
}

function merge(left, right){
    let result = [];
    let i=0, j=0;
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
}
console.log(mergeSort([7,5,6,9,4,3,2,1]));  // [1,2,3,4,5,6,7,9]

// TC = O(nlogn)
// SC = O(n)

