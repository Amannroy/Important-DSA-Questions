function trapWater(height){
    let n = height.length;

    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i=1;i<n;i++){
        left[i] = Math.max(left[i-1], height[i]);
    }

    for(let i=n-2;i>=0;i--){
        right[i] = Math.max(right[i+1], height[i]);
    }

    let ans = 0;
    for(let i=0;i<n;i++){
        ans += Math.min(right[i], left[i]) - height[i];
    }
    return ans;
}
console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1])); // 6

// TC = O(n)
// SC = O(1)
