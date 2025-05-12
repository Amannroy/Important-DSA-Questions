class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        // code here
        let n = arr.length;
        d = d % n;
        
        
        this.reverse(arr, 0, n-1);
        this.reverse(arr, 0, n-d-1);
        this.reverse(arr, n-d, n-1);
    }
        
         reverse(arr, start, end){
             
            
            while(start < end){
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
}