function isSubsequence(s, t){
    let left = 0;
    let right = 0;

    while(left < s.length && right < t.length){
        if(s[left] === t[right]){
            left++;
        }else{
            right++;
        }
    }
    return left === s.length;
}
console.log(isSubsequence("abc", "ahbgdc")); // true

// TC = O(n)
// SC = O(1)
