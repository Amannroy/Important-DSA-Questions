    function pushZerosToEnd(arr) {
        
        let nonZero = 0;
        
        for(let i=0;i<arr.length;i++){
            if(arr[i] !== 0){
                arr[nonZero] = arr[i];
                nonZero++;
            }
        }
        for(let i=nonZero;i<arr.length;i++){
            arr[i] = 0;
        }
        return arr;
    }
    console.log(pushZerosToEnd([1,2,0,4,3,0,5,0]));
    
    // TC = O(n)
    // SC = O(1)