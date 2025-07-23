function mostWater(height){
    let left = 0;
    let right = height.length-1;
    let ans = 0;
     
    while(left < right){
        let length = Math.min(height[left], height[right]);
        let width = right - left;
       
        let area = length * width;

        if(area > ans){
            ans = area;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return ans;
}
console.log(mostWater([1,8,6,2,5,4,8,3,7])); // 49

// TC = O(n)
// SC = O(1)
