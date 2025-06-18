// Brute Force
function mergeSortedArray(nums1, m, nums2, n){
for(let i=0;i<n;i++){
    nums1[i+m] = nums2[i];
}
nums1.sort((a,b) => a - b);
}
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
mergeSortedArray(nums1, 3, nums2, 3);
console.log(nums1); // [1,2,2,3,5,6]

// TC = O((m+n)log(m+n))
// SC = O(1)

// Optimize
let merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m + n - 1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            k--;
            i--;
        }else{
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }

    while(j >= 0){
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    return nums1;
};

// TC = O(m+n)
// SC = O(1)