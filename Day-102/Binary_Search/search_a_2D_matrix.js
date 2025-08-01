function search2D(matrix, target){
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        
        let row = Math.floor(mid / n);
        let col = mid % n;

        if(matrix[row][col] === target){
            return true;
        }else if(matrix[row][col] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return false;
}
console.log(search2D([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));  // true


