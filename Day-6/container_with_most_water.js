// Brute force using nested loops
// function maxArea(height){
//     let maxArea = 0;
//    for(let i=0;i<height.length;i++){
//      for(j=i+1;j<height.length;j++){
//         let h = Math.min(height[i], height[j]);
//         let w = j - i;
//         let area = h * w;

//         maxArea = Math.max(maxArea, area);
//     }
    
//    }
//    return maxArea;
// }
// console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 47

// TC = O(n^2)
// SC = O(1)

// Optimize Approach-> Using Two POinters
function maxArea(height){
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
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49

// TC = O(n)
// SC = O(1)


