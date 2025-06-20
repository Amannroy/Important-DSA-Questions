// We will expand the window to the right, and shrink it from the left only when the number of changes needed becomes more than k
// window size = right - left + 1
// maxFreq = count of the most frequent character in the current window
// Characters to change = window size - maxFreq
// If characters to change <= k → valid window

// s = "AABABBA", k = 1
// Output: 4

function longestRepeatingCharacter(s, k){
   let left = 0;
   let maxLength = 0;
   let maxFreq = 0;

   let charCount = new Map();

   for(let right=0;right<s.length;right++){
     let char = s[right];
     charCount.set(char, (charCount.get(char) || 0) + 1);

     maxFreq = Math.max(maxFreq, charCount.get(char));

     if((right - left + 1) - maxFreq > k){
         let charLeft = s[left];
         charCount.set(charLeft, charCount.get(charLeft) - 1);
         left++;
     }
     maxLength = Math.max(maxLength, right-left+1);
   }
   return maxLength;
}
console.log(longestRepeatingCharacter("AABABBA", 1)); // 4

// TC = O(n)
// SC = O(n)
