function groupAnagrams(strs){
  let map = new Map();

  for(let str of strs){
    let sortedStr = str.split('').sort().join('');
    if(!map.has(sortedStr)){
        map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }
  return Array.from(map.values());
}
console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));//  [ 'act', 'cat' ], [ 'pots', 'tops', 'stop' ], [ 'hat' ] ]
// TC = O(m*n logn)
// SC = O(m*n)