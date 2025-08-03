let minEatingSpeed = function (piles, h) {
    let start = 1;
    let end = Math.max(...piles);
    let ans = end;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        let total = 0;
        let n = piles.length;
        for (let i = 0; i < n; i++) {
            total += Math.ceil(piles[i] / mid);
        }

        if (total > h) {
            start = mid + 1;
        } else {
            ans = mid;
            end = mid - 1;
        }
    }
    return ans;
};