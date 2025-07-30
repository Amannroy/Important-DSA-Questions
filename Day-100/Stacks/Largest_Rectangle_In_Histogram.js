function largestRectangleArea(heights){
    let n = heights.length;
    let stack = [];
    let left = new Array(n);
    let right = new Array(n);

    // For finding previous smaller element(to the left)
    for(let i=0;i<n;i++){
        while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length-1];
        stack.push(i);
    }

    stack = [];
    // For finding next smaller element(to the right)
    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && heights[stack[stack.length-1]] >= heights[i]){
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length-1];
        stack.push(i);
    }

    let maxArea = 0;
    for(let i=0;i<n;i++){
        let width = right[i] - left[i] - 1;
        let area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}
console.log(largestRectangleArea([2,1,5,6,2,3])); // 10

// TC = O(n)
// SC = O(n)
