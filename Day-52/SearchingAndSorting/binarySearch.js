function binarySearch(arr, x){
    let start = 0;
    let end = arr.length-1;
    let mid;

    while(start <= end){
        mid = Math.floor((start + end) / 2);
        if(arr[mid] === x){
            return mid;
        }else if(arr[mid] < x){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binarySearch([2,4,5,6,7,8,9], 7)); // 4

// TC = O(log n)
// SC = O(1)
