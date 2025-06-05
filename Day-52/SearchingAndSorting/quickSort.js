function quickSort(arr){
    // Base Case
    if(arr.length <= 1){
        return arr;
    }
    quickSortHelper(arr, 0, arr.length-1);
    return arr;
}
function quickSortHelper(arr, start, end){
    if(start < end){
    let pivotIndex = partition(arr, start, end);
    quickSortHelper(arr, start, pivotIndex-1);
    quickSortHelper(arr, pivotIndex+1, end);
}
}

function partition(arr, start, end){
    let f = start;
    let pivot = arr[end];
    for(let c=start;c<end;c++){
        if(arr[c] <= pivot){
            let temp = arr[f];
            arr[f] = arr[c];
            arr[c] = temp;
            f++;
        }
       
    }
     let temp = arr[f];
        arr[f] = arr[end];
        arr[end] = temp;
        return f;
}
console.log(quickSort([5,4,6,3,7,2,1])); // [1,2,3,4,5,6,7]

// TC = O(nlogn)
// SC = O(1)


