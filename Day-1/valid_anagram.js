// Two Method -> One using Object and second using HashMap both will take TC = O(n) and SC = O(1)

// Using HashMap
// function anagram(s, t){
//    if(s.length !== t.length) return false;

//    let map = new Map();

//    for(let char of s){
//      map.set(char, (map.get(char) || 0) + 1);
//    }

//    for(let char of t){
//     if(!map.has(char)) return false;

//     map.set(char, map.get(char) - 1);
//     if(map.get(char) < 0)  return false;
//    }
//    return true;
// }
// console.log(anagram("racecar","carrace")); // true

// TC = O(n)
// SC = O(1)

// Using Objects

function isAnagram(s, t){
    if(s.length !== t.length){
        return false;
    }

    let charCount = {};

    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(charCount[char]){
            charCount[char] += 1;
        }else{
            charCount[char] = 1;
        }
    }

    for(let i=0;i<t.length;i++){
        let char = t[i];

        if(!charCount[char]){
            return false;
        }
        charCount[char] -= 1;
    }
    return true;
}
console.log(isAnagram("racecar","carrace")); // true

// TC = (n)
// SC = (1)
