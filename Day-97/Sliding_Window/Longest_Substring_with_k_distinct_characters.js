function longestSubtring(s, k){
    let left = 0;
    let map = new Map();
    let maxLength = 0;

    for(let right=0;right<s.length;right++){
        let char = s[right];
        map.set(char, (map.get(char) || 0) + 1);

        while(map.size > k){
            let char = s[left];
            map.set(char, map.get(char) - 1);

            if(map.get(char) === 0){
                map.delete(char);
            }
            left++;
        }

        if(map.size === k){
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }
    return maxLength === 0 ? -1 : maxLength;
}
console.log(longestSubtring("aabacbebebe", 3)); // 7

// TC = O(n)
// SC = O(k)
