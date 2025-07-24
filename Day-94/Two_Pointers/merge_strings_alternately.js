function mergeString(word1, word2){
    let left = 0;
    let right = 0;
    let ans = [];

    while(left < word1.length && right < word2.length){
        ans.push(word1[left]);
        ans.push(word2[right]);
        left++;
        right++;
    }

    while(left < word1.length){
        ans.push(word1[left]);
        left++;
    }
    while(right < word2.length){
        ans.push(word2[right]);
        right++;
    }
    return ans.join('');
}
console.log(mergeString("ab", "pqrs"));

// TC = O(n + m)
// SC = O(n + m)