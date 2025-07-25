let groupAnagrams = function(strs) {
    let map = new Map();

    for(let str of strs){
        let sortedStr = str.split('').sort().join('');

        if(!map.has(sortedStr)){
            map.set(sortedStr, []);
        }
            map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
};

// TC = O(n)
// SC = O(n)