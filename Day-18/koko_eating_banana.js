let minEatingSpeed = function (piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let ans = end;
    let n = piles.length;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        let total_time = 0;
        for (let i = 0; i < n; i++) {
            total_time += Math.ceil(piles[i] / mid);
        }
        if (total_time <= h) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
};
console.log(minEatingSpeed([3,6,7,11], 8)); // 4


// TC = O(n * logm)
// SC = O(1)
