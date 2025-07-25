let reverseString = function(s) {
   let left = 0;
   let right = s.length-1;

   while(left < right){
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
   }
};

// TC = O(n)
// SC = O(1)