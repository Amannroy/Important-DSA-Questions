function findMedianSortedArrays(nums1, nums2){
    let merged = [...nums1, ...nums2].sort((a,b) => a - b);

    let n = merged.length;

    if(n % 2 === 1){
        return merged[Math.floor(n / 2)];
    }else{
        let mid1 = merged[n / 2 - 1];
        let mid2 = merged[n / 2];
        return (mid1 + mid2) / 2;
    }
}
console.log(findMedianSortedArrays([1,3],[2,4])); // 2.5

// TC = O((m + n) log(m + n))
// SC = O(m + n)