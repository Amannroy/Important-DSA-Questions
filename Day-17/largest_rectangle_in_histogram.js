let largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [];
    let n = heights.length;
    let maxArea = 0;

    for(let i=0;i<n;i++){
        while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]){
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);

        }
        stack.push(i);
    }
    return maxArea;
};
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10

// TC = O(n)
// SC = O(n)
