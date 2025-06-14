let groupAnagrams = function(strs) {
    let map = new Map();

    for(let str of strs){
       let sortedWord = str.split('').sort().join('');

       if(!map.has(sortedWord)){
           map.set(sortedWord, []);
       }
        map.get(sortedWord).push(str); // Always push
    }
    return Array.from(map.values());
};

// TC = O(m * nlogn)
// SC = O(m * n)