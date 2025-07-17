function sumRecursive(arr){
    // Base Case
    if(arr.length === 0){
        return 0;
    }
    return arr[0] + sumRecursive(arr.slice(1));
}
console.log(sumRecursive([1,2,3,4,5])); // 15

// TC = O(n)
// SC = O(n)
