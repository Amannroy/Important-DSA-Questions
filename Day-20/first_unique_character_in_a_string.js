let firstUniqChar = function(s) {
    let map = new Map();

    for(let i=0;i<s.length;i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }

    for(let i=0;i<s.length;i++){
        if(map.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
};
console.log(firstUniqChar("loveleetcode")); // 2

// TC = O(n)
// SC = O(n)
