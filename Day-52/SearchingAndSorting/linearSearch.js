function linearSearch(arr, x){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === x){
            return i;
        }
        
    }
    return -1;
}
console.log(linearSearch([4,5,6,7,8,9,45,778], 9)); // 5

// TC = O(n)
// SC = O(1)
