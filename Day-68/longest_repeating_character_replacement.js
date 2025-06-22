function longestRepeatingCharacter(s, k){
    let charCount = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for(let right=0;right<s.length;right++){
        let char = s[right];
        charCount.set(char, (charCount.get(char) || 0) + 1);

        maxFreq = Math.max(maxFreq, charCount.get(char));

        if((right - left + 1) - maxFreq > k){
            let char2 = s[left];
            charCount.set(char2, charCount.get(char2) - 1);
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
console.log(longestRepeatingCharacter("ABAB", 2));


// TC = O(n)
// SC = O(n)