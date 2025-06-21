function containerWithWater(height){
    let n = height.length;
    let maxArea = 0;
    for(let i=0;i<n;i++){
          
        for(let j=i+1;j<n;j++){
            let minHeight = Math.min(height[i], height[j]);
            let width = j - i;

            let area = minHeight * width;

            if(area > maxArea){
                maxArea = area;
            }
        }
    }
    return maxArea;
}
console.log(containerWithWater([1,8,6,2,5,4,8,3,7])); // 49

// TC = O(n^2)
// SC = O(1)


// Optimize
function containerWithWaterOptimize(height){
    let n = height.length;

    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while(left < right){
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;

        let area = minHeight * width;
        
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }

        if(area > maxArea){
            maxArea = area;
        }

    }
    return maxArea;
}
console.log(containerWithWaterOptimize([1,8,6,2,5,4,8,3,7])); // 49

// TC = O(n)
// SC = O(1)
