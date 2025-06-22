function longestSubstring(s){
    let set = new Set();

    let left = 0;
    let maxLength = 0;
    let right = 0;

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
console.log((longestSubstring("abcabcbb"))); // 3

// TC = O(n)
// SC = O(n)
