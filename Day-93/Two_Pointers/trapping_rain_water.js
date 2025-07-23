function trap(height){
    let left = new Array(height.length).fill(0);
    let right = new Array(height.length).fill(0);
    let n = height.length;

    left[0] = height[0];
    right[n-1] = height[n-1];

    // For left of i
    for(let i=1;i<height.length;i++){
        left[i] = Math.max(left[i-1], height[i]);
    }
    // For right of i
    for(let i=n-2;i>=0;i--){
        right[i] = Math.max(right[i+1], height[i]);
    }

    // For ans
    let ans = 0;
    for(let i=0;i<n;i++){
        ans += Math.min(left[i], right[i]) - height[i];
    }
    return ans;
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6


// TC = O(n) + O(n) + O(n) = O(n)
// SC = O(n)