function areAnagrams(s1, s2){
    if(s1.length !== s2.length){
        return false;
    }

    let freq = new Array(26).fill(0);

    for(let char of s1){
        freq[char.charCodeAt(0) - 97]++;
    }

    for(let char of s2){
        freq[char.charCodeAt(0) - 97]--;
    }

    for(let count of freq){
        if(count !== 0){
            return false;
        }
    }
    return true;
}
console.log(areAnagrams("listen", "silent")); // true

// TC = O(n)
// SC = O(1)