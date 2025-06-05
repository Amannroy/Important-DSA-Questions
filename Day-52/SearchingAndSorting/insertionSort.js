function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
} 
console.log(insertionSort([5,4,6,7,3,2,1])); // [1,2,3,4,5,6,7]

// TC = O(N^2)
// SC = O(1)
