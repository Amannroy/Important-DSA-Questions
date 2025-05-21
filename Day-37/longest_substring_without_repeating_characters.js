function lengthOfLongestSubstring(s){
    let left = 0;
    let right = 0;
    let maxLength = 0;

    let set = new Set();
    
    while(right < s.length){
         if(!set.has(s[right])){
            set.add(s[right]);
            right++;

            maxLength = Math.max(maxLength, right - left);
         }else{
            set.delete(s[left]);
            left++;
         }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb")); // 3

// TC = O(n)
// SC = O(n)
