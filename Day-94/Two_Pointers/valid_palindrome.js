let isPalindrome = function(s) {
   let left = 0;
   let right = s.length-1;

   while(left < right){
      let leftChar = s[left].toLowerCase();
      let rightChar = s[right].toLowerCase();

      if(!isAlphanumeric(leftChar)){
        left++;
      }else if(!isAlphanumeric(rightChar)){
        right--;
      }else if(leftChar !== rightChar){
        return false;
      }else{
      left++;
      right--;
   }
   }
   return true;
}

function isAlphanumeric(ch){
    return (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= '0' && ch <= '9')
    )
}

// TC = O(n)
// SC = O(1)