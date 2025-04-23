// Brute Force-> O(n^2) and we have to use map so space-> O(n)

// Sliding Window
function characterReplacement(s,k){
    let left = 0;
    let maxCount = 0;
    let freq = new Array(26).fill(0);

    for(let right=0;right<s.length;right++){
        let index = s.charCodeAt(right) - 65;
        freq[index]++;
        maxCount = Math.max(maxCount, freq[index]);

        if((right - left + 1) - maxCount > k){
            freq[s.charCodeAt(left) - 65]--;
            left++;
        }
    }
    return s.length - left;
}
console.log(characterReplacement("ABAB", 2)); // 4

// TC = O(n)
// SC = O(1)


