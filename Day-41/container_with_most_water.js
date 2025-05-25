// Brute Force
// function maxArea(heights){
//    let maxArea = 0;

//    for(let i=0;i<heights.length;i++){
//     for(let j=i+1;j<heights.length;j++){
//         let height = Math.min(heights[i], heights[j]);
//         let width = j - i;
//         let area = height * width;

//         if(area > maxArea){
//             maxArea = area;
//         }
//     }
//    }
//    return maxArea;
// }
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // 49

// TC = O(n^2)
// SC = O(1)


// Optimize(Two pointers)

function maxArea(heights){
    let maxArea = 0;
    let left = 0;
    let right = heights.length - 1;

    while(left < right){
        let height = Math.min(heights[left], heights[right]);
        let width  = right - left;
        let area = height * width;
        
        maxArea = Math.max(maxArea, area);

        if(heights[left] < heights[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// TC = O(n)
// SC = O(1)