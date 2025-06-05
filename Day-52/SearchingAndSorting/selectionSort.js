function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex = i;

        for(let j=i+1;j<arr.length;j++){
             if(arr[j] < arr[minIndex]){
                minIndex = j;
             }
             let temp = arr[minIndex];
             arr[minIndex] = arr[i];
             arr[i] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([5,4,6,3,7,8,2])); // [2,3,4,5,6,7,8]

// TC = O(N^2)
// SC = O(1)
