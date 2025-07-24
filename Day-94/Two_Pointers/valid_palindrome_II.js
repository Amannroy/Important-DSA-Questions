function valid_palindrome_II(s){

    let left = 0;
    let right = s.length-1;

    while(left <= right){
        if(s[left] !== s[right]){
            return palindrome(s, left+1, right) || palindrome(s, left, right-1);
        }
        left++;
        right--;
    }
    return true;
    }

    function palindrome(str, left, right){
        while(left <= right){
            if(str[left] !== str[right]){
                return false;
            }
            left++;
            right--;
        }
        return true;
}

console.log(valid_palindrome_II("abca")); // true

// TC = O(n)
// SC = O(1)
