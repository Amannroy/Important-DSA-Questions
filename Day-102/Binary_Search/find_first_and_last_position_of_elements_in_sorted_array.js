function firstAndLarge(nums, target){
     let left = leftBinarySearch(nums,target);
     let right = rightBinarySearch(nums,target);

     let ans = new Array(2);
     ans[0] = left;
     ans[1] = right;
     return ans;
}

function leftBinarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    let ans = -1;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        
        if(arr[mid] < target){
            left = mid + 1;
        }else if(arr[mid] > target){
            right = mid - 1;
        }else{
            ans = mid;
            right = mid - 1;
        }
    }
    return ans;
}
function rightBinarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    let ans = -1;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        
        if(arr[mid] < target){
            left = mid + 1;
        }else if(arr[mid] > target){
            right = mid - 1;
        }else{
            ans = mid;
            left = mid + 1;
        }
    }
    return ans;
}
console.log(firstAndLarge([5,7,7,8,8,10], 8)); // [3,4]
