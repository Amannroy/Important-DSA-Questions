
let reverseStr = function(s, k) {
    let s1 = s.split('');
    let n = s.length;

    for(let i=0;i<n;i += 2*k){
        let l = i;
        let r = Math.min(i+k-1, n-1);

        while(l < r){
            [s1[l], s1[r]] = [s1[r], s1[l]];
            l++;
            r--;
        }
    }
    return s1.join('');
};


// TC = O(n)
// SC = O(n)