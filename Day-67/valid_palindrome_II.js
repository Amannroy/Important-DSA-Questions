function validPalindromeII(s) {
  let left = 0;
  let right = s.length-1;

  while(left < right){
     if(s[left] !== s[right]){
        return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
     }
     left++;
     right--;
  }
  return true;
}

function isPalindrome(str, left, right){
   while(left < right){
    if(str[left] !== str[right]){
        return false;
    }
    left++;
    right--;
   }
   return true;
}
console.log(validPalindromeII("aba")); //true

// TC = O(n)
// SC = O(1)
