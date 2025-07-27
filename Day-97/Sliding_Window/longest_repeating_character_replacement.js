function longest_repeating(s, k){
   let left = 0;
   let map = new Map();
   let maxLength = 0;
   let maxFreq = 0;

   for(let right=0;right<s.length;right++){
        let char = s[right];
        map.set(char, (map.get(char) || 0) + 1);
        
        maxFreq = Math.max(maxFreq, map.get(char));

        if((right - left + 1) - maxFreq > k){
            let char = s[left];
            map.set(char, map.get(char) - 1);
            left++;
        } 
        maxLength = Math.max(maxLength, right - left + 1);
   }
   return maxLength;
}
console.log(longest_repeating("ABAB", 2)); // 4

// TC = O(n)
// SC = O(n)
