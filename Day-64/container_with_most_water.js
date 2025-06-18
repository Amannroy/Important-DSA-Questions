function containerWater(height){
    let maxWater = 0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
           let width = j - i;
           let minHeight = Math.min(height[i], height[j]);
           let area = width * minHeight;

           maxWater = Math.max(maxWater, area);
        }
    }
    return maxWater;
}
console.log(containerWater([1,8,6,2,5,4,8,3,7])); // 49

// TC = O(n^2)
// SC = O(1)


// Optimize
function containerWaterOptimize(height){
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while(left < right){
      let minHeight = Math.min(height[left], height[right]);
      let width = right - left;
      
      let area = width * minHeight;
      maxArea = Math.max(maxArea, area);

      if(height[left] < height[right]){
        left++;
      }else{
        right--;
      }
      
    } 
    return maxArea;
}
console.log(containerWaterOptimize([1,8,6,2,5,4,8,3,7])); // 49

// TC = O(n)
// SC = O(1)

