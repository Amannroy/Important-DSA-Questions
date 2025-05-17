 function maxProduct(arr) {
        // code here
        
        let maxProduct = -Infinity;
        
        for(let i=0;i<arr.length;i++){
            let product = 1;
            for(let j=i;j<arr.length;j++){
                product *= arr[j];
                maxProduct = Math.max(product, maxProduct);
            }
        }
        return maxProduct;
    }
    // Tc = O(n^2)
    // SC = O(1)

    // Optimized
     function  maxProduct(arr) {
        // code here
        
        let min = arr[0];
        let max = arr[0];
        let result = arr[0];
        
        for(let i=1;i<arr.length;i++){
            if(arr[i] < 0){
                [min, max] = [max, min];
            }
            max = Math.max(arr[i], arr[i] * max);
            min = Math.min(arr[i], arr[i] * min);
            result = Math.max(result, max);
        }
        return result;
    }

    // TC = O(n)
    // SC = O(1)