var characterReplacement = function (s, k) {
    let left = 0;
    let charCount = new Map();
    let maxLength = 0;
    let maxFreq = 0;

    for(let right=0;right<s.length;right++){
        let char = s[right];
        charCount.set(char, (charCount.get(char) || 0) + 1);

        maxFreq = Math.max(maxFreq, charCount.get(char));

        if((right - left + 1) - maxFreq > k){
        let charLeft = s[left];
        charCount.set(charLeft, charCount.get(charLeft)- 1);
        left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

// TC = O(n)
// SC = O(n)