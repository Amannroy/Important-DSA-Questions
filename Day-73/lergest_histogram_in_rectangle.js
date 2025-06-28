let largestRectangleArea = function(heights) {
    let n = heights.length;
    let stack = [];
    let left = new Array(n);
    let right = new Array(n);

    // Finding previous smaller element(to the left)
    for(let i=0;i<n;i++){
      while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]){
         stack.pop();
      }  
      left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];;
      stack.push(i);
    }

    stack = [];

   // Find next smaller element(to the right)
    for(let i=n-1;i>=0;i--){
        while(stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]){
            stack.pop();
        }
        right[i] = stack.length === 0 ? n : stack[stack.length - 1];;
        stack.push(i);
    }

    let maxArea=0;
    for(let i=0;i<n;i++){
        let width = right[i] - left[i] - 1;
        let area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};

// TC = O(n)
// SC = O(n)