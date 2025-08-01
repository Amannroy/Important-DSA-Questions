let lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let maxLength = 0;
    let left = 0;

     for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left++;
        }
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
     }
     return maxLength;
};

// TC = O(n)
// SC = O(n)