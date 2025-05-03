function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, right = 0, maxLength = 0;
  
    while (right < s.length) {
      if (!set.has(s[right])) {
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
      } else {
        set.delete(s[left]);
        left++;
      }
    }
  
    return maxLength;
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
  