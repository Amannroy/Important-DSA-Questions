function lengthOfLongestSubstring(s){
     let set = new Set();
     let left=0, maxLen=0;

     for(let right=0;right<s.length;right++){
           while(set.has(s[right])){
            set.delete(s[left]);
            left++;
           }
           set.add(s[right]);
           maxLen = Math.max(maxLen, right - left + 1);
     }
     return maxLen;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3-> "abc"

// TC = O(n)
// SC = O(n)
