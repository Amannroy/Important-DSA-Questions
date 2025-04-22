// Brute force-> Using two nested loops
// function lengthOfLongestSubstring(s){
//     let res = 0;
//     for(let i=0;i<s.length;i++){
//         let charSet = new Set();
//         for(let j=i;j<s.length;j++){
//             if(charSet.has(s[j])){
//                 break;
//             }
//             charSet.add(s[j]);
//         }
//         res = Math.max(res, charSet.size);
//     }
//     return res;
// }
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3

// TC = O(n*m)
// SC = O(m)


// Optimize-> Using Sliding Window
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
